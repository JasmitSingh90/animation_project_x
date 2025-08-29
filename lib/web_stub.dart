// Import required for StatelessWidget
import 'package:flutter/widgets.dart';

// Stub file for web platform
// This file is imported when running on web to avoid WebView dependencies

class WebViewController {
  WebViewController();
  
  WebViewController setJavaScriptMode(dynamic mode) => this;
  WebViewController loadFlutterAsset(String asset) => this;
  
  Future<void> runJavaScript(String script) async {
    // No-op for web stub
  }
}

class WebViewWidget extends StatelessWidget {
  final WebViewController controller;
  
  const WebViewWidget({super.key, required this.controller});
  
  @override
  Widget build(BuildContext context) {
    return Container(); // Empty container for web
  }
}

enum JavaScriptMode { unrestricted }