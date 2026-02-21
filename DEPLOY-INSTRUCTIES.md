# NOVA Studio Showcase - Deploy Instructies

## 📁 Deze folder bevat alle benodigde bestanden

- `index.html` - De hoofdpagina
- Alle afbeeldingen (.jpg, .png, .svg)

## 🚀 Hoe te deployen naar GitHub

### Optie 1: Direct naar repository

```bash
# 1. Clone je repository
git clone git@github.com:pebje01/tde-dienstenpagina.git
cd tde-dienstenpagina

# 2. Maak een nova-studio folder
mkdir nova-studio

# 3. Kopieer alle bestanden uit deze 'deploy-ready' folder naar nova-studio/
cp /pad/naar/deploy-ready/* nova-studio/

# 4. Add, commit en push
git add nova-studio/
git commit -m "Add NOVA studio showcase"
git push origin main
```

### Optie 2: Als subdirectory

Als je het in een subdirectory wilt:

```bash
cd tde-dienstenpagina
mkdir -p showcases/nova-studio
cp /pad/naar/deploy-ready/* showcases/nova-studio/
git add showcases/
git commit -m "Add NOVA studio showcase"
git push origin main
```

## 🌐 URL na deployment

Als je GitHub Pages gebruikt:
- `https://thedaleyedit.nl/nova-studio/`
- Of: `https://pebje01.github.io/tde-dienstenpagina/nova-studio/`

## ✅ Checklist

- [ ] Bestanden gekopieerd naar repository
- [ ] Git commit gemaakt
- [ ] Gepusht naar GitHub
- [ ] GitHub Pages ingeschakeld (Settings → Pages)
- [ ] Website getest

---

Created: 2026-01-28
By: Daley Jansen
