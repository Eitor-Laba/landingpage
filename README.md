# 🚨 197 PCPB

Projeto front-end em **Vue 3** com **Tailwind CSS** para denúncias anônimas da PCPB, configurado para produção, apenas front estático, com Docker e Node.js.


## Tecnologias

- JS: **Vue 3** 
- CSS: **Tailwind CSS 4.1.14**
- Versão do Node: **Node.js 20**

## Configuração do Ambiente
### *src/components/lib.js*
- **API_URL** (sem /api)
- **PERGUNTAS_RESPOSTAS** → cards no carrossel
- **allowedExtensions** → extensões permitidas para upload
- **maxAudiosPerDenunciation** → máximo de áudios por denúncia
- **maxFilesPerDenunciation** → máximo de arquivos por FileUpload.vue
- **maxFileSizeMB** → máximo de tamanho de um arquivos

## Estrutura do Projeto

### */*
- `docker-compose.yml.example` → Utilizar na produção, builda o js etc. (deve apontar para Dockerfile). *(docker-compose -f docker-compose_dev.yml up --build)*
- `docker-compose_dev.yml` → Utilizar para ter hot reload (deve apontar para Dockerfile_dev)

### *./src*
```
src/
├── App.vue
├── components/
├── assets/
├── pages/
├── main.js
app.css
package.json
docker-compose.yml
Dockerfile
```

- `app.css` → classes de css.
- `App.vue` → componente raiz do Vue.
- `components/` → componentes Vue.
- `pages/` → páginas Vue.
- `assets/` → imagens estáticas.
---