# 📝 Todo App

Bu proje, modern web geliştirme standartları ile **React** ve **Vite** kullanılarak geliştirilmiş, minimalist ve kullanıcı dostu bir yapılacaklar listesi uygulamasıdır. Günlük görevlerinizi organize etmenize yardımcı olmak amacıyla tasarlanmıştır.

---

## 🚀 Öne Çıkan Özellikler

* **Hızlı ve Hafif:** Vite altyapısı sayesinde anlık yükleme ve yüksek performans.
* **Görev Yönetimi:** Kolayca görev ekleyin, tamamlandığında işaretleyin veya listeden kaldırın.
* **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarda sorunsuz kullanım.
* **Temiz Arayüz:** Odak dağıtmayan, kullanıcı deneyimi odaklı modern tasarım.

---

## 🛠️ Teknolojiler

Uygulamanın geliştirilmesinde aşağıdaki araçlar ve kütüphaneler kullanılmıştır:

* **Frontend:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Dil:** JavaScript (ES6+)
* **Stil:** CSS3 (Modern Flexbox/Grid yapısı)
* **Linting:** ESLint

---

## 📦 Kurulum ve Kullanım

Projeyi yerel makinenizde çalıştırmak için şu adımları izleyin:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/MertKadakal/todo-app.git](https://github.com/MertKadakal/todo-app.git)
    ```

2.  **Proje Dizini İçine Girin:**
    ```bash
    cd todo-app
    ```

3.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

4.  **Uygulamayı Geliştirme Modunda Başlatın:**
    ```bash
    npm run dev
    ```

5.  **Tarayıcıdan Erişin:**
    Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

---

## 🏗️ Proje Mimarisi

```text
todo-app/
├── src/
│   ├── components/  # Fonksiyonel UI bileşenleri
│   ├── App.jsx      # Ana uygulama mantığı ve state yönetimi
│   ├── main.jsx     # Uygulamanın giriş noktası
│   └── index.css    # Global stil tanımlamaları
├── public/          # Statik varlıklar
├── index.html       # Temel HTML şablonu
└── package.json     # Proje bağımlılıkları ve scriptler
