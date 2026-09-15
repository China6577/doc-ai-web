import zipfile, re, os

src = r"C:\Users\36413\Desktop\vibe-codeing-project\workbuddy\web\doc-ai-web\assets\征稿通知-更新版.docx"
out = r"C:\Users\36413\Desktop\vibe-codeing-project\workbuddy\web\doc-ai-web\.workbuddy\cfp_extracted.txt"

z = zipfile.ZipFile(src)
xml = z.read("word/document.xml").decode("utf-8")
xml = xml.replace("</w:p>", "\n")
text = re.sub(r"<[^>]+>", "", xml)

with open(out, "w", encoding="utf-8") as f:
    f.write(text)

with open(out + ".status", "w", encoding="utf-8") as f:
    f.write(f"OK {len(text)}")
