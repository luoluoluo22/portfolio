"""Render the current portfolio at phone width as a shareable full-page image."""
from pathlib import Path
from playwright.sync_api import sync_playwright


def build_mobile_screenshot():
    root = Path(__file__).resolve().parent
    output = root / "assets" / "portfolio-mobile.png"
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(
            viewport={"width": 430, "height": 932}, device_scale_factor=2
        )
        page.goto((root / "index.html").as_uri(), wait_until="load")
        page.evaluate("""async () => {
          await document.fonts.ready;
          await Promise.all([...document.images].map(img => {
            img.loading = 'eager';
            return img.decode();
          }));
        }""")
        assert not page.evaluate("document.documentElement.scrollWidth > innerWidth")
        page.screenshot(path=str(output), full_page=True, animations="disabled")
        browser.close()
    print(f"Generated mobile screenshot: {output}")


if __name__ == "__main__":
    build_mobile_screenshot()
