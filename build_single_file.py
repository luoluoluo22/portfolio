import os
import base64
import re

base_dir = r"f:\Desktop\kaifa\portfolio"
index_html = os.path.join(base_dir, "index.html")
style_css = os.path.join(base_dir, "style.css")
app_js = os.path.join(base_dir, "app.js")
output_file = os.path.join(base_dir, "罗名扬_个人作品集_单文件版.html")

with open(index_html, "r", encoding="utf-8") as f:
    html = f.read()

with open(style_css, "r", encoding="utf-8") as f:
    css = f.read()

with open(app_js, "r", encoding="utf-8") as f:
    js = f.read()

html = html.replace('<link rel="stylesheet" href="style.css">', f"<style>\n{css}\n</style>")
html = html.replace('<script src="app.js"></script>', f"<script>\n{js}\n</script>")

def embed_asset(match):
    attr = match.group(1)
    rel_path = match.group(2)
    full_path = os.path.normpath(os.path.join(base_dir, rel_path))
    if os.path.exists(full_path):
        ext = os.path.splitext(full_path)[1].lower()
        if ext == ".png":
            mime = "image/png"
        elif ext in [".jpg", ".jpeg"]:
            mime = "image/jpeg"
        else:
            mime = "application/octet-stream"
        with open(full_path, "rb") as fp:
            b64_data = base64.b64encode(fp.read()).decode("utf-8")
        return f'{attr}="data:{mime};base64,{b64_data}"'
    return match.group(0)

html = re.sub(r'(src)="([^"]+)"', embed_asset, html)

with open(output_file, "w", encoding="utf-8") as f:
    f.write(html)

file_size_mb = os.path.getsize(output_file) / (1024 * 1024)
print(f"Generated: {output_file}")
print(f"File size: {file_size_mb:.2f} MB")
