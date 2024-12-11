from bs4 import BeautifulSoup
import json


def parseHTML(HTMLFilePath, outputDir):
    try:
        with open(HTMLFilePath, 'r', encoding='utf-8') as file:
            html_content = file.read()
            
        soup = BeautifulSoup(html_content, 'html.parser')

        # Extract text and styles
        '''
        Everything is contained in a <p> tag. For each <p> tag, we need to check if there is a span or img tag inside it, and then sequentially extract them.
        '''
        content = []
        for para in soup.find_all('p'):
            if not para.find(['img']):
                span = para.find('span')
                text = span.get_text(strip=True)
                text = ' '.join(text.split())
                style = span.get('style', '')
                style += f';{para.get("style", "")}'
                is_bold = bool(para.find('b'))
                is_underlined = bool(para.find('u'))
                content.append({
                    'type': 'text',
                    'text': text,
                    'style': style,
                    'bold': is_bold,
                    'underlined': is_underlined
                })
            else:
                for element in para.children:
                    if element.name == 'table':
                        img = element.find('img')
                        img_height = img.get('height', '')
                        img_width = img.get('width', '')
                        img_src = img.get('src', '')
                        content.append({
                            'type': 'image',
                            'ImageHeight': img_height,
                            'ImageWidth': img_width,
                            'ImageSrc': img_src
                        })
                    
                    elif element.name == 'span':
                        text = element.get_text(strip=True)
                        text = ' '.join(text.split())
                        style = element.get('style', '')
                        style += f';{para.get("style", "")}'
                        is_bold = bool(element.find('b'))
                        is_underlined = bool(element.find('u'))
                        content.append({
                            'type': 'text',
                            'text': text,
                            'style': style,
                            'bold': is_bold,
                            'underlined': is_underlined
                        })
                   
                        
        json_structure = {
            'content': content
        }
        #delete items with empty text or style
        filtered_content = []
        for item in json_structure['content']:
            if item['type'] == 'text' and item['text'] and item['style']:
                filtered_content.append(item)
            elif item['type'] == 'image':
                filtered_content.append(item)

        json_structure['content'] = filtered_content

        with open(outputDir, 'w', encoding='utf-8') as json_file:
            json.dump(json_structure, json_file, ensure_ascii=False, indent=4)
            print('File Saved at:', outputDir)
    
    
    except Exception as e:
        print('Something went wrong:', e)    
        
if __name__ == '__main__':
    parseHTML('Testing/TestDoc.htm', 'output/TestDocOutput.json')