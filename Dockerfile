FROM node:22-bookworm-slim

# تحديد المجلد الرئيسي داخل الحاوية
WORKDIR /usr/src/app

# نسخ ملفات الإعدادات
COPY package*.json ./
RUN npm install

# نسخ كل ملفات المشروع (بما فيها assets و src)
COPY . .

# بناء المشروع
RUN npm run build

# تشغيل السيرفر من المجلد الصحيح
CMD ["node", "dist/main.js"]
