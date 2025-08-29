import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:webview_flutter/webview_flutter.dart';

class LocalhostWebViewPage extends StatefulWidget {
  const LocalhostWebViewPage({super.key});

  @override
  State<LocalhostWebViewPage> createState() => _LocalhostWebViewPageState();
}

class _LocalhostWebViewPageState extends State<LocalhostWebViewPage> {
  static const String kAssetRoot = 'assets/web'; // index.html + assets/
  HttpServer? _server;
  late final WebViewController _controller;
  int? _port;
  String _currentState = 'IDLE';
  bool _isMediaAttached = false;

  @override
  void initState() {
    super.initState();
    if (!kIsWeb) {
      _initWebView();
      _startServer();
    }
  }

  @override
  void dispose() {
    _server?.close(force: true);
    super.dispose();
  }

  void _initWebView() {
    if (kIsWeb) return; // Skip WebView initialization on web
    
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(Colors.black)
      ..setNavigationDelegate(NavigationDelegate(
        onPageStarted: (url) => debugPrint('[WEB] start $url'),
        onPageFinished: (url) => debugPrint('[WEB] finished $url'),
        onWebResourceError: (e) => debugPrint(
          '[WEB][err] code=${e.errorCode} type=${e.errorType} desc=${e.description}',
        ),
      ));

    // Add JavaScript channel for console logs
    _controller.addJavaScriptChannel(
      'LOG',
      onMessageReceived: (msg) => debugPrint('[console] ${msg.message}'),
    );
  }

  Future<void> _startServer() async {
    if (kIsWeb) return; // Skip server on web
    
    _server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    _port = _server!.port;
    debugPrint('[SRV] http://127.0.0.1:$_port');

    // Serve requests
    unawaited(Future(() async {
      await for (final req in _server!) {
        try {
          final assetPath = _mapPath(req.uri.path);
          final data = await rootBundle.load(assetPath);
          req.response.headers.set(
            HttpHeaders.contentTypeHeader,
            _mimeFor(assetPath),
          );
          req.response.headers.set('Access-Control-Allow-Origin', '*');
          req.response.add(data.buffer.asUint8List());
          await req.response.close();
        } catch (e) {
          debugPrint('[SRV][404] ${req.uri.path} -> $e');
          req.response.statusCode = HttpStatus.notFound;
          req.response.write('404 Not Found');
          await req.response.close();
        }
      }
    }));

    if (_controller != null) {
      await _controller!.loadRequest(Uri.parse('http://127.0.0.1:${_port!}/index.html'));
    }
    setState(() {});
  }

  String _mapPath(String urlPath) {
    String p = urlPath;
    if (p.isEmpty || p == '/' || p == '/index' || p == '/index.html') {
      p = 'index.html';
    } else if (p.startsWith('/')) {
      p = p.substring(1);
    }
    p = p.replaceAll('..', '');
    return '$kAssetRoot/$p';
  }

  String _mimeFor(String path) {
    final p = path.toLowerCase();
    if (p.endsWith('.html')) return 'text/html; charset=utf-8';
    if (p.endsWith('.js') || p.endsWith('.mjs')) return 'application/javascript; charset=utf-8';
    if (p.endsWith('.css')) return 'text/css; charset=utf-8';
    if (p.endsWith('.json')) return 'application/json; charset=utf-8';
    if (p.endsWith('.wasm')) return 'application/wasm';
    if (p.endsWith('.png')) return 'image/png';
    if (p.endsWith('.jpg') || p.endsWith('.jpeg')) return 'image/jpeg';
    if (p.endsWith('.gif')) return 'image/gif';
    if (p.endsWith('.svg')) return 'image/svg+xml';
    if (p.endsWith('.ico')) return 'image/x-icon';
    return 'application/octet-stream';
  }

  // Sound wave control methods
  void setWaveState(String state) {
    final script = 'window.dispatchEvent(new CustomEvent("wave:setState",{detail:"$state"}))';
    if (!kIsWeb) {
      _controller?.runJavaScript(script);
    } else {
      debugPrint('[WEB] Would execute: $script');
    }
    setState(() {
      _currentState = state;
    });
  }

  void attachMedia(String url, {bool autoplay = false, bool loop = false, double volume = 1.0}) {
    final script = 'window.dispatchEvent(new CustomEvent("wave:attachMedia",{detail:{url:"$url",autoplay:$autoplay,loop:$loop,volume:$volume}}))';
    if (!kIsWeb) {
      _controller?.runJavaScript(script);
    } else {
      debugPrint('[WEB] Would execute: $script');
    }
    setState(() {
      _isMediaAttached = true;
    });
  }

  void playMedia() {
    const script = 'window.dispatchEvent(new Event("wave:mediaPlay"))';
    if (!kIsWeb) {
      _controller?.runJavaScript(script);
    } else {
      debugPrint('[WEB] Would execute: $script');
    }
  }

  void pauseMedia() {
    const script = 'window.dispatchEvent(new Event("wave:mediaPause"))';
    if (!kIsWeb) {
      _controller?.runJavaScript(script);
    } else {
      debugPrint('[WEB] Would execute: $script');
    }
  }

  void setMediaVolume(double volume) {
    final script = 'window.dispatchEvent(new CustomEvent("wave:mediaVolume",{detail:{volume:$volume}}))';
    if (!kIsWeb) {
      _controller?.runJavaScript(script);
    } else {
      debugPrint('[WEB] Would execute: $script');
    }
  }

  void detachMedia() {
    const script = 'window.dispatchEvent(new Event("wave:detachMedia"))';
    if (!kIsWeb) {
      _controller?.runJavaScript(script);
    } else {
      debugPrint('[WEB] Would execute: $script');
    }
    setState(() {
      _isMediaAttached = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Localhost WebView - Sound Wave'),
        actions: [
          if (_port != null)
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Center(
                child: Text(
                  'Port: $_port',
                  style: const TextStyle(fontSize: 12),
                ),
              ),
            ),
        ],
      ),
      body: Column(
        children: [
          // Server status and current state info
          Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.grey.shade100,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text(
                  'State: $_currentState',
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                Text(
                  'Media: ${_isMediaAttached ? 'Attached' : 'None'}',
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                if (_port != null)
                  Text(
                    'Server: 127.0.0.1:$_port',
                    style: const TextStyle(fontSize: 12, color: Colors.green),
                  ),
              ],
            ),
          ),
          
          // WebView or Web fallback
          Expanded(
            flex: 2,
            child: kIsWeb
                ? Container(
                    margin: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.orange),
                      borderRadius: BorderRadius.circular(8),
                      gradient: LinearGradient(
                        colors: [Colors.orange.shade100, Colors.orange.shade300],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                    ),
                    child: const Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(
                            Icons.warning,
                            size: 48,
                            color: Colors.orange,
                          ),
                          SizedBox(height: 16),
                          Text(
                            'Localhost WebView',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: Colors.orange,
                            ),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'This implementation is mobile-only.\nHTTP server is not available on web.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.black87),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Use the Cross-Platform WebView for web support.',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 12,
                              color: Colors.grey,
                              fontStyle: FontStyle.italic,
                            ),
                          ),
                        ],
                      ),
                    ),
                  )
                : (_port != null && _controller != null
                    ? WebViewWidget(controller: _controller!)
                    : const Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            CircularProgressIndicator(),
                            SizedBox(height: 16),
                            Text('Starting localhost server...'),
                          ],
                        ),
                      )),
          ),
          
          // Control buttons
          Container(
            padding: const EdgeInsets.all(16.0),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.3),
                  spreadRadius: 1,
                  blurRadius: 5,
                ),
              ],
            ),
            child: Column(
              children: [
                const Text(
                  'Wave Controls',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8.0,
                  runSpacing: 8.0,
                  children: [
                    ElevatedButton(
                      onPressed: () => setWaveState('IDLE'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _currentState == 'IDLE' ? Colors.blue : null,
                        foregroundColor: _currentState == 'IDLE' ? Colors.white : null,
                      ),
                      child: const Text('Idle'),
                    ),
                    ElevatedButton(
                      onPressed: () => setWaveState('ACTIVE'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _currentState == 'ACTIVE' ? Colors.green : null,
                        foregroundColor: _currentState == 'ACTIVE' ? Colors.white : null,
                      ),
                      child: const Text('Active'),
                    ),
                    ElevatedButton(
                      onPressed: () => setWaveState('PROCESSING'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _currentState == 'PROCESSING' ? Colors.orange : null,
                        foregroundColor: _currentState == 'PROCESSING' ? Colors.white : null,
                      ),
                      child: const Text('Processing'),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                const Text(
                  'Media Controls',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8.0,
                  runSpacing: 8.0,
                  children: [
                    ElevatedButton(
                      onPressed: () => attachMedia(
                        'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
                        autoplay: true,
                      ),
                      child: const Text('Attach Audio'),
                    ),
                    ElevatedButton(
                      onPressed: _isMediaAttached ? () => playMedia() : null,
                      child: const Text('Play'),
                    ),
                    ElevatedButton(
                      onPressed: _isMediaAttached ? () => pauseMedia() : null,
                      child: const Text('Pause'),
                    ),
                    ElevatedButton(
                      onPressed: _isMediaAttached ? () => detachMedia() : null,
                      child: const Text('Detach'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}