import requests

page = requests.get('http://127.0.0.1:5000/project/Science Project')
with open('test.html', 'wb+') as file:
    file.write(page.content)