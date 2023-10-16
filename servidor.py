import http.server
import socketserver

PORT = 8000

class MiHandler(http.server.SimpleHTTPRequestHandler):
    pass

with socketserver.TCPServer(("", PORT), MiHandler) as httpd:
    print("Servidor iniciado en el puerto", PORT)
    httpd.serve_forever()
