import 'package:flutter/material.dart';
import 'sound_wave_widget.dart';
import 'localhost_webview_page.dart';

void main() {
  runApp(const SoundWaveApp());
}

class SoundWaveApp extends StatelessWidget {
  const SoundWaveApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sound Wave Animation',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Sound Wave Animation Demo'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'Choose Implementation',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 32),
            
            // Cross-platform implementation card
            Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    const Icon(
                      Icons.devices,
                      size: 48,
                      color: Colors.blue,
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Cross-Platform WebView',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 8),
                    const Text(
                      'Web: Animated Flutter UI\nMobile: WebView with assets/',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.grey),
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const SoundWaveHomePage(),
                          ),
                        );
                      },
                      child: const Text('Open Cross-Platform Demo'),
                    ),
                  ],
                ),
              ),
            ),
            
            const SizedBox(height: 16),
            
            // Localhost server implementation card
            Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    const Icon(
                      Icons.http,
                      size: 48,
                      color: Colors.green,
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Localhost Server WebView',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 8),
                    const Text(
                      'Mobile only: HTTP server + WebView\nBest for complex HTML/JS apps',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.grey),
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const LocalhostWebViewPage(),
                          ),
                        );
                      },
                      child: const Text('Open Localhost Demo'),
                    ),
                  ],
                ),
              ),
            ),
            
            const Spacer(),
            
            // Info section
            Container(
              padding: const EdgeInsets.all(16.0),
              decoration: BoxDecoration(
                color: Colors.grey.shade100,
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Column(
                children: [
                  Icon(
                    Icons.info_outline,
                    color: Colors.orange,
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Both implementations support the same JavaScript API:\n• wave:setState (IDLE, ACTIVE, PROCESSING)\n• wave:attachMedia, wave:mediaPlay, etc.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 12, color: Colors.black87),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class SoundWaveHomePage extends StatefulWidget {
  const SoundWaveHomePage({super.key});

  @override
  State<SoundWaveHomePage> createState() => _SoundWaveHomePageState();
}

class _SoundWaveHomePageState extends State<SoundWaveHomePage> {
  final GlobalKey<SoundWaveWidgetState> _waveKey = GlobalKey<SoundWaveWidgetState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Cross-Platform WebView'),
      ),
      body: Column(
        children: [
          Expanded(
            child: SoundWaveWidget(key: _waveKey),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Wrap(
              spacing: 8.0,
              runSpacing: 8.0,
              children: [
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.setWaveState('IDLE'),
                  child: const Text('Idle'),
                ),
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.setWaveState('ACTIVE'),
                  child: const Text('Active'),
                ),
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.setWaveState('PROCESSING'),
                  child: const Text('Processing'),
                ),
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.attachMedia(
                    'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
                    autoplay: true,
                  ),
                  child: const Text('Attach Audio'),
                ),
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.playMedia(),
                  child: const Text('Play'),
                ),
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.pauseMedia(),
                  child: const Text('Pause'),
                ),
                ElevatedButton(
                  onPressed: () => _waveKey.currentState?.detachMedia(),
                  child: const Text('Detach Audio'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
