import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'dart:math';

// Conditional import - WebView for mobile, stub for web
import 'package:webview_flutter/webview_flutter.dart'
    if (dart.library.html) 'web_stub.dart';

class SoundWaveWidget extends StatefulWidget {
  const SoundWaveWidget({super.key});

  @override
  State<SoundWaveWidget> createState() => SoundWaveWidgetState();
}

class SoundWaveWidgetState extends State<SoundWaveWidget> with TickerProviderStateMixin {
  WebViewController? _controller;
  String _currentState = 'IDLE';
  bool _isMediaAttached = false;
  bool _isPlaying = false;
  double _volume = 1.0;
  
  late AnimationController _waveController;
  late AnimationController _pulseController;
  late Animation<double> _waveAnimation;
  late Animation<double> _pulseAnimation;

  @override
  void initState() {
    super.initState();
    _initializeWebView();
    _initializeAnimations();
  }

  void _initializeWebView() {
    if (!kIsWeb) {
      // Mobile WebView setup
      _controller = WebViewController()
        ..setJavaScriptMode(JavaScriptMode.unrestricted)
        ..loadFlutterAsset('assets/wave/index.html');
    }
  }
  
  void _initializeAnimations() {
    _waveController = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );
    
    _pulseController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );
    
    _waveAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _waveController,
      curve: Curves.easeInOut,
    ));
    
    _pulseAnimation = Tween<double>(
      begin: 0.8,
      end: 1.2,
    ).animate(CurvedAnimation(
      parent: _pulseController,
      curve: Curves.elasticOut,
    ));
  }

  @override
  void dispose() {
    _waveController.dispose();
    _pulseController.dispose();
    super.dispose();
  }

  void setWaveState(String state) {
    final script = 'window.dispatchEvent(new CustomEvent("wave:setState",{detail:"$state"}))';
    _executeScript(script);
    
    // Update visual state
    setState(() {
      _currentState = state;
    });
    
    // Handle animations based on state
    if (kIsWeb) {
      _pulseController.forward().then((_) => _pulseController.reset());
      
      switch (state) {
        case 'IDLE':
          _waveController.stop();
          break;
        case 'ACTIVE':
          _waveController.repeat();
          break;
        case 'PROCESSING':
          _waveController.repeat(reverse: true);
          break;
      }
    }
  }

  void attachMedia(String url, {bool autoplay = false, bool loop = false, double volume = 1.0}) {
    final script = 'window.dispatchEvent(new CustomEvent("wave:attachMedia",{detail:{url:"$url",autoplay:$autoplay,loop:$loop,volume:$volume}}))';
    _executeScript(script);
    
    setState(() {
      _isMediaAttached = true;
      _volume = volume;
      if (autoplay) _isPlaying = true;
    });
  }

  void playMedia() {
    const script = 'window.dispatchEvent(new Event("wave:mediaPlay"))';
    _executeScript(script);
    
    setState(() {
      _isPlaying = true;
    });
  }

  void pauseMedia() {
    const script = 'window.dispatchEvent(new Event("wave:mediaPause"))';
    _executeScript(script);
    
    setState(() {
      _isPlaying = false;
    });
  }

  void setMediaVolume(double volume) {
    final script = 'window.dispatchEvent(new CustomEvent("wave:mediaVolume",{detail:{volume:$volume}}))';
    _executeScript(script);
    
    setState(() {
      _volume = volume;
    });
  }

  void detachMedia() {
    const script = 'window.dispatchEvent(new Event("wave:detachMedia"))';
    _executeScript(script);
    
    setState(() {
      _isMediaAttached = false;
      _isPlaying = false;
    });
  }

  void _executeScript(String script) {
    if (kIsWeb) {
      debugPrint('Web: Would execute script: $script');
      // On web, we'll display a placeholder instead of WebView
    } else {
      _controller?.runJavaScript(script);
    }
  }

  Widget _buildWaveVisualization() {
    Color stateColor;
    String stateText;
    
    switch (_currentState) {
      case 'IDLE':
        stateColor = Colors.blue;
        stateText = 'Idle';
        break;
      case 'ACTIVE':
        stateColor = Colors.green;
        stateText = 'Active';
        break;
      case 'PROCESSING':
        stateColor = Colors.orange;
        stateText = 'Processing';
        break;
      default:
        stateColor = Colors.grey;
        stateText = 'Unknown';
    }

    return AnimatedBuilder(
      animation: Listenable.merge([_waveAnimation, _pulseAnimation]),
      builder: (context, child) {
        return Container(
          decoration: BoxDecoration(
            border: Border.all(color: stateColor),
            borderRadius: BorderRadius.circular(8),
            gradient: LinearGradient(
              colors: [
                stateColor.withOpacity(0.1),
                stateColor.withOpacity(0.3),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: Stack(
            children: [
              // Background wave pattern
              if (_currentState != 'IDLE')
                Positioned.fill(
                  child: CustomPaint(
                    painter: WavePainter(
                      animation: _waveAnimation,
                      color: stateColor,
                      isProcessing: _currentState == 'PROCESSING',
                    ),
                  ),
                ),
              
              // Center content
              Center(
                child: Transform.scale(
                  scale: _pulseAnimation.value,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        _isPlaying ? Icons.volume_up : (_isMediaAttached ? Icons.volume_off : Icons.graphic_eq),
                        size: 48,
                        color: stateColor,
                      ),
                      const SizedBox(height: 16),
                      Text(
                        'Sound Wave Visualization',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: stateColor,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'State: $stateText',
                        style: TextStyle(
                          fontSize: 16,
                          color: stateColor.withOpacity(0.8),
                        ),
                      ),
                      if (_isMediaAttached) ...[
                        const SizedBox(height: 8),
                        Text(
                          _isPlaying ? 'Playing' : 'Paused',
                          style: TextStyle(
                            fontSize: 14,
                            color: stateColor.withOpacity(0.6),
                          ),
                        ),
                        Text(
                          'Volume: ${(_volume * 100).toInt()}%',
                          style: TextStyle(
                            fontSize: 12,
                            color: stateColor.withOpacity(0.6),
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      return _buildWaveVisualization();
    } else {
      return _controller != null 
        ? WebViewWidget(controller: _controller!)
        : const Center(child: CircularProgressIndicator());
    }
  }
}

class WavePainter extends CustomPainter {
  final Animation<double> animation;
  final Color color;
  final bool isProcessing;

  WavePainter({
    required this.animation,
    required this.color,
    this.isProcessing = false,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color.withOpacity(0.3)
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke;

    final path = Path();
    final amplitude = isProcessing ? 20 : 30;
    final frequency = isProcessing ? 4 : 2;
    
    for (int i = 0; i < size.width.toInt(); i++) {
      final x = i.toDouble();
      final y = size.height / 2 + 
          amplitude * sin((x / size.width * frequency * 2 * pi) + (animation.value * 2 * pi));
      
      if (i == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    }
    
    canvas.drawPath(path, paint);
    
    // Draw additional waves for processing state
    if (isProcessing) {
      paint.color = color.withOpacity(0.2);
      final path2 = Path();
      for (int i = 0; i < size.width.toInt(); i++) {
        final x = i.toDouble();
        final y = size.height / 2 + 
            amplitude * 0.7 * sin((x / size.width * frequency * 2 * pi) + (animation.value * 2 * pi) + pi/3);
        
        if (i == 0) {
          path2.moveTo(x, y);
        } else {
          path2.lineTo(x, y);
        }
      }
      canvas.drawPath(path2, paint);
    }
  }

  @override
  bool shouldRepaint(WavePainter oldDelegate) {
    return oldDelegate.animation.value != animation.value ||
           oldDelegate.color != color ||
           oldDelegate.isProcessing != isProcessing;
  }
}