import os
import requests
from duckduckgo_search import DDGS

os.makedirs("public/images/clients", exist_ok=True)

queries = {
    "slb": "Schlumberger SLB logo transparent",
    "koc": "Kuwait Oil Company KOC logo transparent",
    "baker_hughes": "Baker Hughes logo transparent",
    "al_mansoori": "Al Mansoori Specialized Engineering logo transparent",
}

ddgs = DDGS()

for name, query in queries.items():
    print(f"Searching for {name}...")
    try:
        results = list(ddgs.images(query, max_results=5))
        for res in results:
            url = res['image']
            if not url.endswith((".png", ".jpg", ".jpeg", ".svg")):
                continue
            ext = ".png" if ".png" in url else ".jpg"
            print(f"Trying to download {url}...")
            try:
                r = requests.get(url, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
                if r.status_code == 200:
                    with open(f"public/images/clients/{name}{ext}", "wb") as f:
                        f.write(r.content)
                    print(f"Saved {name}{ext}")
                    break
            except Exception as e:
                print(f"Failed to download from {url}: {e}")
    except Exception as e:
        print(f"Failed to search for {name}: {e}")
