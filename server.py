from waitress import serve
from cmsimde import flaskapp

serve(flaskapp.app, listen='127.0.0.1:9158', threads=8)
