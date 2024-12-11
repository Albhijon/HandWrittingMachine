from flask import Flask, render_template, request, session, redirect, url_for
import json
import os
from Backend_Scripts.HTMParser import parseHTML 
import random
import time


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'FileData'
app.config['SECRET_KEY'] = 'secret!'


@app.route('/')
def index():
    return render_template('ChooseFile.html')


@app.route('/upload', methods=['POST'])
def processFile():
    if 'file' not in request.files:
        return render_template('UploadError.html', status='No file part')

    file = request.files['file']
    if file.filename == '':
        return render_template('UploadError.html', status='No selected file')

    if file:
        #Get Project name
        project = request.form['ProjectName']
        if not project:
            return render_template('UploadError.html', status='Please Provide a Project Name')
        
        
        #Save File
        filename = file.filename
        if project in os.listdir(app.config['UPLOAD_FOLDER']):
            return render_template('UploadError.html', status='File Already Exists')
        else:
            os.mkdir(app.config['UPLOAD_FOLDER']+'/'+project)
            
        path = os.path.join(app.config['UPLOAD_FOLDER'], project)
        file.save(os.path.join(path, filename))
        
        
        #Parse File
        parseHTML(path+"/"+filename, (path+'/'+filename).replace('.htm', '')+'.json')
        # Fake Delay
        # time.sleep(10)
        
        return redirect(url_for('returnProjectInterface', project=project))
    

@app.route('/project/<project>')
def returnProjectInterface(project):
    for file in os.listdir(f'FileData/{project}'):
        if file.endswith('.json'):
            with open(f'FileData/{project}/{file}', 'r') as f:
                data = json.load(f)
                break
    
    return render_template('main.html', project=project, data=data)
    
    
        

if __name__ == '__main__':
    app.run(debug=True, port=5000)