import json

beginning = '''
<html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="main.css">
                    <title>Document Preview</title>
                </head>
                <body>
                    <div class="preview">
                        <p class="prev">SVG Preview</p>
                        <div class="page">
'''

end = '''
</div>
    </div>
    <div class="param">
        <p class="prev">Parameters</p>
        <form>
            <div class="pa">

                <div class="paramcont">
                    <div>
                        <label name="wls">Word Level Spacing</label><br>
                        <input type="range" min="0" max="100" name="wls" value="0">
                    </div>
                    <input type='number' readonly value="0">
                </div>
                <div class="paramcont">
                    <div>
                        <label name="wlr">Word Line Randomness</label><br>
                        <input type="range" min="0" max="100" name="wls" value="0">
                    </div>
                    <input type='number' readonly value="0">
                </div>
                <div class="paramcont">
                    <div>
                        <label name="lls">Letter Level Spacing</label><br>
                        <input type="range" min="0" max="100" name="lls" value="0">
                    </div>
                    <input type='number' readonly value="0">
                </div>
                <div class="paramcont">
                    <div>
                        <label name="llr">Letter Level Randomness</label><br>
                        <input type="range" min="0" max="100" name="llr" value="0">
                    </div>
                    <input type='number' readonly value="0">
                </div>
                <div class="paramcont">
                    <div>
                        <label name="rlr">Random Line Rotation</label><br>
                        <input type="range" min="0" max="100" name="rlr" value="0">
                    </div>
                    <input type='number' readonly value="0">
                </div>
            </div>

            <button class="submitBtn" type="submit">Genrate Handwriting</button>
        </form>
    </div>
</body>
</html>
'''

def write(content):
    with open('output/output.html', 'w') as file:
        file.write(beginning)
        
        #Dynamically Add Paragraphs and Images
        for item in json.load(open(content))['content']:
            if item['type'] == 'image':
                file.write(f'''
                <div style='height:{item['ImageHeight']}; width:{item['ImageWidth']}; margin: 0 auto;'></div>
            ''')
            else:
                if item['underlined']:
                    item['style'] += ';text-decoration: underline'
                file.write(f'''
                    <p style="{item['style']};font-family:Handwriting; margin-bottom:10px">
                        {item['text']}
                    </p>
                ''')
        
        
        file.write(end)
        
write('output/TestDocOutput.json')        