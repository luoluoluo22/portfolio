import os
from PIL import Image

assets_dir = r"f:\Desktop\kaifa\portfolio\assets"

# 1. 剪艾 JianAI 纯净工作区裁切（去除顶部96px白色窗口栏）
jianai_path = os.path.join(assets_dir, "jianai-editor.png")
if os.path.exists(jianai_path):
    im = Image.open(jianai_path)
    w, h = im.size
    if h > 1969:
        cropped = im.crop((0, 96, w, h))
        cropped.save(jianai_path, "PNG")
        print(f"jianai-editor.png cropped: ({w}x{h}) -> {cropped.size}")

# 2. 燕子设置界面裁切（去除左侧壁纸与底部任务栏约48px）
settings_path = os.path.join(assets_dir, "yanzi-settings.png")
if os.path.exists(settings_path):
    im = Image.open(settings_path)
    w, h = im.size
    if w > 2000:
        cropped = im.crop((698, 0, w, h - 48))
        cropped.save(settings_path, "PNG")
        print(f"yanzi-settings.png cropped: ({w}x{h}) -> {cropped.size}")

# 3. 燕子概览界面裁切（去除右侧壁纸与底部任务栏）
overview_path = os.path.join(assets_dir, "yanzi-overview.png")
if os.path.exists(overview_path):
    im = Image.open(overview_path)
    w, h = im.size
    if w > 2000:
        cropped = im.crop((0, 0, 1861, h - 48))
        cropped.save(overview_path, "PNG")
        print(f"yanzi-overview.png cropped: ({w}x{h}) -> {cropped.size}")

# 4. 燕子弹窗组件裁切（去除左侧壁纸与底部任务栏）
dialog_path = os.path.join(assets_dir, "yanzi-dialog.png")
if os.path.exists(dialog_path):
    im = Image.open(dialog_path)
    w, h = im.size
    if w > 2000:
        cropped = im.crop((1330, 0, w, h - 48))
        cropped.save(dialog_path, "PNG")
        print(f"yanzi-dialog.png cropped: ({w}x{h}) -> {cropped.size}")

# 5. 燕子设计排版规范裁切（去除右侧壁纸与底部任务栏）
typo_path = os.path.join(assets_dir, "yanzi-typography.png")
if os.path.exists(typo_path):
    im = Image.open(typo_path)
    w, h = im.size
    if w > 2000:
        cropped = im.crop((0, 0, 1861, h - 48))
        cropped.save(typo_path, "PNG")
        print(f"yanzi-typography.png cropped: ({w}x{h}) -> {cropped.size}")

print("All screenshots cropped to clean internal product view!")
