import os
import docx

doc_dir = 'doc'
for filename in os.listdir(doc_dir):
    if filename.endswith('.docx'):
        filepath = os.path.join(doc_dir, filename)
        doc = docx.Document(filepath)
        out_filepath = filepath.replace('.docx', '.md')
        
        with open(out_filepath, 'w', encoding='utf-8') as f:
            for para in doc.paragraphs:
                f.write(para.text + '\n')
                
        print(f"Extracted {filename} to {out_filepath}")
