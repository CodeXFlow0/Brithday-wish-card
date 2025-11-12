from http.server import SimpleHTTPRequestHandler, HTTPServer

port = 8000
print(f"Server running at http://localhost:{port}")

server = HTTPServer(('', port), SimpleHTTPRequestHandler)
server.serve_forever()
