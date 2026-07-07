import { BlogPost } from "./blog-types";

export const blogPosts: BlogPost[] = [
  {
    slug: "online-sinav-guvenligi-webrtc-websocket",
    publishedAt: "2026-06-15",
    tags: ["WebRTC", "WebSocket", "Laravel", "React", "Online Exam"],
    title: {
      tr: "Online Sınav Güvenliği: WebRTC ve WebSocket ile Gerçek Zamanlı Sistemler",
      en: "Online Exam Security: Real-Time Systems with WebRTC and WebSocket",
    },
    description: {
      tr: "Production ortamında güvenli online sınav platformları geliştirirken kopya tespiti, kullanıcı takibi ve gerçek zamanlı iletişim için WebRTC ve WebSocket mimarisini nasıl kurguladım.",
      en: "How I designed a WebRTC and WebSocket architecture for cheating detection, user tracking, and real-time communication while building secure online exam platforms in production.",
    },
    readingTime: { tr: "8 dk", en: "8 min" },
    content: {
      tr: `
Production ortamında binlerce öğrencinin aynı anda sınava girdiği bir sistem düşünün. Kamera açık, ekran paylaşımı aktif, gözetmen panelinden anlık müdahale edilebiliyor ve arka planda kopya tespiti çalışıyor. Bu senaryo teoride kolay görünür; pratikte ise frontend, backend, gerçek zamanlı iletişim ve güvenlik katmanlarının birlikte ölçeklenebilir şekilde tasarlanmasını gerektirir.

KCTEK bünyesinde Qulak platformu üzerinde tam da bu problem alanında çalıştım. Dijital eğitim ve güvenli online sınav sistemlerinde uçtan uca geliştirme sorumluluğu aldım. Bu yazıda, sahada öğrendiğim mimari kararları ve teknik yaklaşımları paylaşıyorum.

## Neden Gerçek Zamanlı Mimari Şart?

Klasik HTTP istek-yanıt modeli, online sınav ortamında yetersiz kalır. Gözetmenin adayı anlık görmesi, ihlal bildirimlerinin gecikmeden iletilmesi ve sınav akışının kesintisiz sürmesi için sürekli açık bir kanala ihtiyaç vardır.

Bu noktada iki teknoloji öne çıkar:

- **WebSocket:** Durum güncellemeleri, bildirimler, chat ve sınav oturumu senkronizasyonu
- **WebRTC:** Düşük gecikmeli video, ses ve ekran paylaşımı

React tabanlı frontend ile Laravel backend arasında bu iki katmanı birleştirmek, sistemin hem kullanıcı deneyimini hem de güvenilirliğini doğrudan etkiler.

## Kopya Tespiti ve Kullanıcı Aktivite Takibi

Sınav güvenliği yalnızca kamera açmakla bitmez. Aşağıdaki sinyalleri birlikte değerlendirmek gerekir:

- Sekme değişimi ve odak kaybı
- Kopyala-yapıştır davranışları
- Anormal fare ve klavye aktivitesi
- Kamera veya mikrofonun kapanması
- Ağ bağlantısı dalgalanmaları

Frontend tarafında bu olayları yakalayıp backend'e anlamlı event'ler olarak göndermek kritik. Ham veriyi değil, bağlamlı veriyi iletmek raporlama ve müdahale süreçlerini kolaylaştırır.

Backend tarafında Laravel servisleri bu event'leri işleyerek risk skoru üretir. Gözetmen paneli WebSocket üzerinden güncellenir ve kritik durumlarda anlık uyarı gösterilir.

## WebRTC Entegrasyonunda Dikkat Edilmesi Gerekenler

WebRTC güçlü ama hassas bir teknoloji. Production'da şu noktalara özellikle dikkat ettim:

1. **STUN/TURN yapılandırması:** Kurumsal ağlarda P2P bağlantı her zaman mümkün olmaz.
2. **Bant genişliği yönetimi:** Video kalitesini cihaz ve bağlantıya göre dinamik ayarlamak gerekir.
3. **Yeniden bağlanma stratejisi:** Bağlantı koptuğunda kullanıcıyı sınavdan atmak yerine kontrollü recovery akışı sunmak önemli.
4. **Tarayıcı uyumluluğu:** Chrome, Safari ve Firefox arasında davranış farklarını test etmek şart.

CommuneNow ve Live P2P gibi projelerde de benzer gerçek zamanlı iletişim problemleriyle çalıştım. Online sınav ortamında bu deneyim, edge case'leri önceden görmemi sağladı.

## Frontend ve Backend Arası Veri Akışı

En büyük teknik borç kaynaklarından biri, frontend ile backend arasındaki tutarsız veri modelleridir. Qulak'ta şu prensipleri uyguladık:

- API response'ları için net tip tanımları (TypeScript)
- Sınav oturumu state'ini tek kaynakta yönetme
- WebSocket event'leri için versiyonlu payload yapısı
- Hata durumlarında kullanıcıya anlaşılır geri bildirim

Bu yaklaşım, yeni modül eklerken regresyon riskini ciddi şekilde azalttı.

## Ölçeklenebilirlik ve Production Deneyimi

Sınav dönemlerinde trafik patlamaları normaldir. Auto Scaling, veritabanı okuma/yazma ayrımı ve cache stratejileri bu dönemlerde kritik hale gelir. PostgreSQL ve MySQL'i birlikte kullandığımız senaryolarda, hangi verinin nerede tutulacağına baştan karar vermek performansı doğrudan etkiler.

## Sonuç

Online sınav güvenliği, tek bir özellik değil; mimari bir yaklaşımdır. WebRTC ve WebSocket doğru kurgulandığında hem güvenli hem de kullanıcı dostu bir deneyim mümkün olur. Production'da çalışan sistemlerde geliştirme yapmak, teorik çözümlerden çok daha değerli dersler verir.

Bu alanda deneyim kazanmak isteyen geliştiricilere tavsiyem: önce basit bir WebSocket chat yapın, ardından WebRTC ile video ekleyin, en son güvenlik ve ölçek senaryolarını düşünün. Katman katman ilerlemek, karmaşık sistemleri yönetilebilir kılar.
`,
      en: `
Imagine a system where thousands of students take an exam at the same time. The camera is on, screen sharing is active, a proctor can intervene in real time, and cheating detection runs in the background. This scenario looks easy in theory; in practice it requires the frontend, backend, real-time communication, and security layers to be designed to scale together.

At KCTEK, I worked on exactly this problem space on the Qulak platform, taking end-to-end development responsibility for digital education and secure online exam systems. In this post I share the architectural decisions and technical approaches I learned in the field.

## Why Is a Real-Time Architecture Essential?

The classic HTTP request-response model falls short in an online exam environment. You need a persistent, open channel so the proctor can see the candidate instantly, violation notifications arrive without delay, and the exam flow continues uninterrupted.

Two technologies stand out here:

- **WebSocket:** Status updates, notifications, chat, and exam session synchronization
- **WebRTC:** Low-latency video, audio, and screen sharing

Combining these two layers between a React-based frontend and a Laravel backend directly affects both the user experience and the reliability of the system.

## Cheating Detection and User Activity Tracking

Exam security does not end with turning on the camera. You need to evaluate the following signals together:

- Tab switching and focus loss
- Copy-paste behavior
- Abnormal mouse and keyboard activity
- Camera or microphone being turned off
- Network connection fluctuations

Capturing these events on the frontend and sending them to the backend as meaningful events is critical. Sending context-rich data rather than raw data simplifies reporting and intervention processes.

On the backend, Laravel services process these events to produce a risk score. The proctor panel is updated over WebSocket and shows instant alerts in critical situations.

## Things to Watch Out for in WebRTC Integration

WebRTC is powerful but delicate. In production, I paid particular attention to the following:

1. **STUN/TURN configuration:** P2P connections are not always possible on corporate networks.
2. **Bandwidth management:** Video quality must be adjusted dynamically based on device and connection.
3. **Reconnection strategy:** When the connection drops, it is important to offer a controlled recovery flow instead of kicking the user out of the exam.
4. **Browser compatibility:** Testing behavioral differences between Chrome, Safari, and Firefox is a must.

I worked on similar real-time communication problems in projects like CommuneNow and Live P2P. In the online exam environment, that experience helped me anticipate edge cases in advance.

## Data Flow Between Frontend and Backend

One of the biggest sources of technical debt is inconsistent data models between the frontend and backend. On Qulak, we applied these principles:

- Clear type definitions for API responses (TypeScript)
- Managing exam session state from a single source
- A versioned payload structure for WebSocket events
- Understandable feedback to the user in error states

This approach significantly reduced regression risk when adding new modules.

## Scalability and Production Experience

Traffic spikes are normal during exam periods. Auto Scaling, read/write database separation, and caching strategies become critical during these times. In scenarios where we used PostgreSQL and MySQL together, deciding upfront which data lives where directly affected performance.

## Conclusion

Online exam security is not a single feature; it is an architectural approach. When WebRTC and WebSocket are set up correctly, both a secure and a user-friendly experience are possible. Developing on systems running in production teaches far more valuable lessons than theoretical solutions.

My advice to developers who want to gain experience in this area: first build a simple WebSocket chat, then add video with WebRTC, and only then think about security and scale scenarios. Progressing layer by layer makes complex systems manageable.
`,
    },
  },
  {
    slug: "react-query-ile-frontend-veri-yonetimi",
    publishedAt: "2026-05-20",
    tags: ["React Query", "TypeScript", "React", "GraphQL", "Performance"],
    title: {
      tr: "React Query ile Frontend Veri Yönetimi: API Çağrılarını %40 Azaltmak",
      en: "Frontend Data Management with React Query: Cutting API Calls by 40%",
    },
    description: {
      tr: "Mayadem'de ÇokNet platformunda React Query, Zustand ve TypeScript kullanarak veri yönetimini nasıl optimize ettim ve performansı nasıl artırdım.",
      en: "How I optimized data management and improved performance on the ÇokNet platform at Mayadem using React Query, Zustand, and TypeScript.",
    },
    readingTime: { tr: "7 dk", en: "7 min" },
    content: {
      tr: `
Çok rollü bir eğitim platformunda öğrenci, admin ve kurum panelleri aynı anda farklı veri ihtiyaçlarına sahiptir. Her ekran geçişinde API çağrısı yapmak hem performansı düşürür hem de sunucu maliyetini artırır. Mayadem'de ÇokNet platformu üzerinde tam olarak bu problemi çözmek için React Query'ye geçiş yaptık.

## Problem: Gereksiz API Trafiği

İlk versiyonda veri yönetimi büyük ölçüde component seviyesinde \`useEffect\` + \`fetch\` ile yapılıyordu. Bu yaklaşımın sorunları:

- Aynı veri farklı component'lerde tekrar tekrar çekiliyordu
- Loading ve error state'leri her yerde ayrı yönetiliyordu
- Cache mekanizması yoktu
- Stale data (eski veri) problemi sık yaşanıyordu

Kullanıcı deneyimi olarak bu, gereksiz spinner'lar ve yavaş ekran geçişleri anlamına geliyordu.

## React Query Neden?

React Query (TanStack Query), server state yönetimi için tasarlanmış bir kütüphanedir. Redux veya Zustand'dan farklı olarak client state değil, **sunucudan gelen verinin yaşam döngüsünü** yönetir.

Temel avantajları:

- **Otomatik cache:** Aynı query key ile yapılan istekler cache'den döner
- **Background refetch:** Veri arka planda güncellenir, kullanıcı beklemez
- **Stale-while-revalidate:** Eski veriyi gösterirken arka planda yeniler
- **Deduping:** Aynı anda yapılan aynı istekler birleştirilir

## Uygulama: ÇokNet Platformu

ÇokNet'te öğrenci, admin ve kurum rolleri için ayrı dashboard'lar vardı. Her rol farklı veri setlerine ihtiyaç duyuyordu ama bazı veriler (kullanıcı profili, kurum bilgisi) ortaktı.

### Query Key Stratejisi

Tutarlı bir query key yapısı oluşturduk:

\`\`\`
['user', userId]
['courses', { role, institutionId }]
['dashboard-stats', role, dateRange]
\`\`\`

Bu yapı, cache invalidation'ı öngörülebilir kıldı.

### Hasura ve GraphQL Entegrasyonu

Backend tarafında Hasura ile GraphQL API kullanıyorduk. React Query'nin \`useQuery\` hook'u ile GraphQL sorgularını birleştirmek, REST'e göre daha esnek veri çekme imkanı sağladı. İhtiyaç duyulan alanları seçerek over-fetching'i azalttık.

### Zustand ile Birlikte Kullanım

React Query server state, Zustand ise UI state için kullanıldı:

- **React Query:** API verileri, listeler, detay sayfaları
- **Zustand:** Modal durumu, filtre seçimleri, sidebar açık/kapalı

Bu ayrım, state yönetimini netleştirdi ve gereksiz re-render'ları azalttı.

## Ölçülebilir Sonuçlar

Optimizasyon sonrası gözlemlediğimiz iyileştirmeler:

- Dashboard yüklenme süresinde belirgin azalma
- Aynı oturumda tekrarlayan API çağrılarında ciddi düşüş
- Kullanıcı şikayetlerinde "sayfa yavaş" geri bildirimlerinin azalması
- Geliştirici deneyiminde loading/error yönetiminin merkezileşmesi

## Tekrar Kullanılabilir Component Mimarisi

React Query'ye geçiş, component yapısını da değiştirdi. Veri çekme logic'i custom hook'lara taşındı:

\`\`\`typescript
// useCourses.ts
export function useCourses(institutionId: string) {
  return useQuery({
    queryKey: ['courses', institutionId],
    queryFn: () => fetchCourses(institutionId),
    staleTime: 5 * 60 * 1000, // 5 dakika
  });
}
\`\`\`

Bu pattern, yeni ekran eklerken geliştirme hızını artırdı.

## Dikkat Edilmesi Gereken Tuzaklar

1. **staleTime ve cacheTime ayarı:** Çok kısa tutarsanız cache anlamını yitirir, çok uzun tutarsanız eski veri gösterirsiniz.
2. **Query key tutarlılığı:** Key yapısı değişirse cache invalidation bozulur.
3. **Optimistic updates:** Mutation'larda dikkatli olun, rollback stratejisi planlayın.
4. **Error boundary:** Global hata yönetimi için React Query'nin error handling'ini kullanın.

## Sonuç

React Query, modern React uygulamalarında server state yönetimi için güçlü bir araç. Özellikle veri yoğun dashboard ve admin paneli projelerinde API çağrılarını azaltmak ve kullanıcı deneyimini iyileştirmek için değerlendirilmesi gereken bir çözüm.

Frontend geliştiriciler olarak sadece UI çizmekle kalmayıp, veri akışını da optimize ettiğimizde hem kullanıcı hem de altyapı tarafında kazanç sağlarız.
`,
      en: `
On a multi-role education platform, student, admin, and institution panels have different data needs at the same time. Making an API call on every screen transition both hurts performance and increases server cost. At Mayadem, we migrated to React Query on the ÇokNet platform to solve exactly this problem.

## The Problem: Unnecessary API Traffic

In the first version, data management was largely done at the component level with \`useEffect\` + \`fetch\`. The issues with this approach:

- The same data was fetched over and over in different components
- Loading and error states were managed separately everywhere
- There was no caching mechanism
- The stale data problem occurred frequently

In terms of user experience, this meant unnecessary spinners and slow screen transitions.

## Why React Query?

React Query (TanStack Query) is a library designed for server state management. Unlike Redux or Zustand, it manages not client state but **the lifecycle of data coming from the server**.

Its core advantages:

- **Automatic cache:** Requests with the same query key are served from the cache
- **Background refetch:** Data is updated in the background so the user does not wait
- **Stale-while-revalidate:** Shows the old data while refreshing in the background
- **Deduping:** Identical simultaneous requests are merged

## Implementation: The ÇokNet Platform

ÇokNet had separate dashboards for student, admin, and institution roles. Each role needed different data sets, but some data (user profile, institution info) was shared.

### Query Key Strategy

We built a consistent query key structure:

\`\`\`
['user', userId]
['courses', { role, institutionId }]
['dashboard-stats', role, dateRange]
\`\`\`

This structure made cache invalidation predictable.

### Hasura and GraphQL Integration

On the backend, we used a GraphQL API with Hasura. Combining GraphQL queries with React Query's \`useQuery\` hook gave us more flexible data fetching than REST. By selecting only the fields we needed, we reduced over-fetching.

### Using It Together with Zustand

React Query was used for server state, and Zustand for UI state:

- **React Query:** API data, lists, detail pages
- **Zustand:** Modal state, filter selections, sidebar open/closed

This separation clarified state management and reduced unnecessary re-renders.

## Measurable Results

Improvements we observed after optimization:

- A noticeable reduction in dashboard load time
- A significant drop in repeated API calls within the same session
- Fewer "the page is slow" complaints from users
- A more centralized loading/error management developer experience

## Reusable Component Architecture

Migrating to React Query also changed the component structure. Data-fetching logic moved into custom hooks:

\`\`\`typescript
// useCourses.ts
export function useCourses(institutionId: string) {
  return useQuery({
    queryKey: ['courses', institutionId],
    queryFn: () => fetchCourses(institutionId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
\`\`\`

This pattern increased development speed when adding new screens.

## Pitfalls to Watch Out For

1. **staleTime and cacheTime settings:** Too short and the cache loses meaning; too long and you show stale data.
2. **Query key consistency:** If the key structure changes, cache invalidation breaks.
3. **Optimistic updates:** Be careful with mutations and plan a rollback strategy.
4. **Error boundary:** Use React Query's error handling for global error management.

## Conclusion

React Query is a powerful tool for server state management in modern React applications. It is a solution worth considering especially in data-heavy dashboard and admin panel projects to reduce API calls and improve the user experience.

As frontend developers, when we optimize not just the UI but also the data flow, we gain on both the user and infrastructure sides.
`,
    },
  },
  {
    slug: "startup-co-founder-frontend-mimarisi-let-wash",
    publishedAt: "2026-07-01",
    tags: ["Startup", "Let Wash", "Vite", "React", "TanStack Router", "Co-founder"],
    title: {
      tr: "Startup'ta Co-founder Olarak Frontend Mimarisi Nasıl Kurulur?",
      en: "How to Build a Frontend Architecture as a Startup Co-founder",
    },
    description: {
      tr: "Palo Alto merkezli Let Wash'ta co-founder ve frontend developer olarak çok rollü SaaS panelinin (Root, Owner, Admin, Washer) teknik mimarisini nasıl kurguladığımı paylaşıyorum.",
      en: "How I designed the technical architecture of a multi-role SaaS panel (Root, Owner, Admin, Washer) as co-founder and frontend developer at Palo Alto-based Let Wash.",
    },
    readingTime: { tr: "9 dk", en: "9 min" },
    content: {
      tr: `
Bir startup'ın co-founder'ı olmak, sadece kod yazmaktan çok daha fazlasını gerektirir. Ürün kararları, teknik mimari, kullanıcı deneyimi ve büyüme stratejisi birbirine bağlıdır. Palo Alto merkezli Let Wash'ta co-founder ve frontend developer olarak tam da bu kesişim noktasında çalışıyorum.

Let Wash'ta web tabanlı SaaS paneli geliştiriyorum: **Root**, **Carwash Owner**, **Carwash Admin** ve **Washer** rolleri için ayrı yetkilendirme, dashboard ve operasyon akışları. Bu yazıda, startup ortamında bu çok rollü SaaS frontend mimarisini nasıl kurduğumuzu paylaşıyorum.

## İlk Günler: Hız mı, Kalite mi?

Startup'larda en sık duyulan cevap "hız" olur. Ama hız, teknik borç biriktirerek sağlanırsa 3 ay sonra her feature 3 kat uzun sürer. Let Wash'ta şu dengeyi hedefledik:

- **MVP için hızlı iterasyon:** Temel akışları çalışır hale getir
- **Mimari için sağlam temel:** Sonradan değiştirmesi pahalı olacak kararları baştan doğru al
- **Teknik borç takibi:** Bilinçli olarak alınan borçları dokümante et

## Teknoloji Seçimi: Neden Vite + React?

Çok rollü bir SaaS paneli; her rolün farklı ekran, yetki ve veri ihtiyacı olduğu anlamına gelir. Let Wash web frontend'inde şu stack'i kullanıyoruz:

| Katman | Teknoloji | Neden |
|--------|-----------|-------|
| Build | **Vite** | Hızlı HMR, kısa build süreleri |
| Framework | **React 19** | Ekosistem, component modeli |
| Dil | **TypeScript** | Tip güvenliği, refactoring |
| Routing | **TanStack Router** | Type-safe routing, code splitting |
| Server State | **TanStack React Query** | Cache, background refetch |
| Client State | **Zustand** | Hafif, minimal boilerplate |
| Styling | **Tailwind CSS v4** | Hızlı UI geliştirme |
| Formlar | **React Hook Form + Zod** | Validasyon ve performans |
| HTTP | **Axios** | API istekleri |
| Ödeme | **Stripe Connect** | İşletme ödeme altyapısı |
| i18n | **i18next** | Çok dilli destek |
| Monitoring | **Sentry** | Production hata takibi |

Next.js yerine Vite tercih etmemizin sebebi net: Let Wash web tarafı, giriş yapmış kullanıcıların kullandığı role-based bir SaaS uygulaması. SSR/SSG ihtiyacımız marketing sitesine göre daha düşük; bunun yerine hızlı geliştirme döngüsü, type-safe routing ve modüler SPA mimarisi öncelikliydi.

## TanStack Router ile Role-Based Routing

TanStack Router, route tanımlarını TypeScript ile birleştirir. Her rol kendi route tree'sine ve yetki sınırına sahip:

- **Root:** Platform geneli yönetim, işletme ve kullanıcı denetimi
- **Carwash Owner:** İşletme sahipliği, gelir, paket ve ödeme ayarları
- **Carwash Admin:** Günlük operasyon, rezervasyon ve ekip yönetimi
- **Washer:** Atanan işler, durum güncellemeleri ve saha operasyonları

Route-level code splitting ile her rol kendi bundle'ını yükler. Yetkisiz route erişimi hem router hem de API katmanında engellenir.

## TanStack Query + Zustand: State Ayrımı

ÇokNet'teki deneyimimden öğrendiğim pattern'i Let Wash'ta da uyguladık:

- **TanStack Query:** API verileri — işletme listesi, rezervasyonlar, gelir raporları, operasyon kuyrukları
- **Zustand:** UI state — modal, filtre, sidebar, geçici form durumları

Bu ayrım, gereksiz re-render'ları azaltır ve veri akışını öngörülebilir kılar.

## Stripe Connect Entegrasyonu

İşletmelerin online ödeme alabilmesi için Stripe Connect kullanıyoruz. Frontend tarafında \`@stripe/react-connect-js\` ile onboarding ve payout dashboard'larını embed ettik. Ödeme akışları hassas olduğu için form validasyonunda Zod şemaları ve React Hook Form ile sıkı tip kontrolü uyguladık.

## Form ve Validasyon Katmanı

Rezervasyon yönetimi, işletme kaydı ve rol atamaları gibi kritik akışlarda:

- **React Hook Form** ile performanslı form yönetimi
- **Zod** ile runtime + compile-time validasyon
- **@hookform/resolvers** ile ikisini birleştirme

Bu üçlü, startup hızında bile form bug'larını erken yakalamamızı sağlıyor.

## i18n ve Production Monitoring

ABD pazarında çok dilli destek için i18next kullanıyoruz. Production'da Sentry ile frontend hatalarını izliyoruz — startup'ta kullanıcı sayısı az olsa bile, ödeme veya rezervasyon akışındaki bir hata kritik.

Test tarafında Vitest ve Testing Library ile component testleri yazıyoruz. Her PR'da \`tsc -b\` typecheck ve ESLint çalışıyor.

## Çok Rollü SaaS Mimarisi

Let Wash web SaaS'ında dört ana rol var. Her birinin ekranları, yetkileri ve iş akışları birbirinden ayrı:

### 1. Root
- Platform genelinde işletme ve kullanıcı yönetimi
- Sistem ayarları ve operasyonel denetim
- Üst düzey raporlama ve müdahale ekranları

### 2. Carwash Owner
- İşletme profili ve ödeme altyapısı (Stripe Connect onboarding)
- Paket, üyelik ve fiyatlandırma yönetimi
- Gelir ve performans analitiği

### 3. Carwash Admin
- Günlük rezervasyon ve operasyon yönetimi
- Ekip ve washer atamaları
- İşletme içi süreçlerin koordinasyonu

### 4. Washer
- Kendisine atanan yıkama işleri
- Durum güncellemeleri ve saha operasyon akışları
- Sadeleştirilmiş, mobil uyumlu arayüz

Tüm roller için ortak bir UI component library (CVA + Tailwind) kullanıyoruz; rol bazlı layout ve navigasyon katmanı üzerine inşa ediliyor.

## Component Mimarisi

Startup'ta over-engineering yapmak tehlikelidir. Şu yapıyı benimsedik:

\`\`\`
src/
  components/ui/       → Button, Input, Card
  features/            → ReservationManager, StripeOnboarding
  routes/              → TanStack Router role modules
  hooks/               → useReservations, useBusinesses
  stores/              → Zustand stores
\`\`\`

Atomic Design'ın tamamını uygulamak yerine, ihtiyaç duydukça extract etmek daha pragmatik.

## TypeScript: Baştan mı, Sonra mı?

Cevap: **baştan.** Startup'ta bile TypeScript kullanmak, refactoring maliyetini düşürür. API response tipleri, form validasyonları ve component prop'ları için tip güvenliği, ekip büyüdükçe daha da değerli hale gelir.

## Palo Alto Startup Ekosistemi

Silicon Valley'de bir startup kurmak, Türkiye'deki deneyimimden farklı dinamiklere sahip. Yatırımcı sunumları, product-market fit arayışı ve hızlı pivot kararları günlük gerçeklik. Frontend developer olarak bu süreçte:

- Ürün kararlarına teknik perspektiften katkı sağlamak
- Prototipleri hızlıca çalışır hale getirmek
- Kullanıcı feedback'lerini hızlı iterate etmek

gibi sorumluluklar üstleniyorum.

## Co-founder Olarak Öğrendiklerim

1. **Mükemmel kod, çalışan üründen önce gelmez** — ama çalışan ürün, sürdürülemez kodla da uzun ömürlü olmaz.
2. **Kullanıcı feedback'i > varsayımlar:** Build et, ölç, öğren.
3. **Teknik borç bilinçli alınır:** Her shortcut teknik borç değildir; hangisinin ödeneceğini bilmek önemli.
4. **Doğru araç seçimi stack tartışmasından önemli:** Next.js her proje için şart değil; Vite + TanStack ekosistemi dashboard ağırlıklı ürünlerde çok verimli.

## Sonuç

Startup'ta co-founder ve frontend developer rolünü birleştirmek, hem teknik hem de ürün becerilerini geliştiren benzersiz bir deneyim. Let Wash'ta Root'tan Washer'a uzanan çok rollü SaaS panelini Vite, TanStack Router, React Query ve Stripe Connect ile geliştirirken, önceki projelerimde (Qulak, ÇokNet, DNSSense) edindiğim deneyimler bu yolculuğa güçlü bir temel sağlıyor.

Frontend developer olarak sadece UI implement etmek yerine, ürün kararlarına katkı sağlayan bir co-founder olmak kariyer açısından da farklı bir perspektif kazandırıyor.
`,
      en: `
Being the co-founder of a startup requires much more than just writing code. Product decisions, technical architecture, user experience, and growth strategy are all connected. At Palo Alto-based Let Wash, I work as co-founder and frontend developer at exactly this intersection.

At Let Wash I build the web-based SaaS panel: separate authorization, dashboards, and operational flows for the **Root**, **Carwash Owner**, **Carwash Admin**, and **Washer** roles. In this post I share how we set up this multi-role SaaS frontend architecture in a startup environment.

## Early Days: Speed or Quality?

In startups, the most common answer is "speed." But if speed is achieved by accumulating technical debt, three months later every feature takes three times as long. At Let Wash, we aimed for this balance:

- **Fast iteration for the MVP:** Get the core flows working
- **A solid foundation for the architecture:** Get decisions that are expensive to change later right from the start
- **Tracking technical debt:** Document the debt you take on deliberately

## Technology Choice: Why Vite + React?

A multi-role SaaS panel means each role has different screens, permissions, and data needs. On the Let Wash web frontend we use the following stack:

| Layer | Technology | Why |
|-------|------------|-----|
| Build | **Vite** | Fast HMR, short build times |
| Framework | **React 19** | Ecosystem, component model |
| Language | **TypeScript** | Type safety, refactoring |
| Routing | **TanStack Router** | Type-safe routing, code splitting |
| Server State | **TanStack React Query** | Cache, background refetch |
| Client State | **Zustand** | Lightweight, minimal boilerplate |
| Styling | **Tailwind CSS v4** | Fast UI development |
| Forms | **React Hook Form + Zod** | Validation and performance |
| HTTP | **Axios** | API requests |
| Payments | **Stripe Connect** | Business payment infrastructure |
| i18n | **i18next** | Multi-language support |
| Monitoring | **Sentry** | Production error tracking |

The reason we chose Vite over Next.js is clear: the Let Wash web side is a role-based SaaS application used by logged-in users. Our SSR/SSG needs are lower than for a marketing site; instead, a fast development loop, type-safe routing, and a modular SPA architecture were the priorities.

## Role-Based Routing with TanStack Router

TanStack Router combines route definitions with TypeScript. Each role has its own route tree and permission boundary:

- **Root:** Platform-wide management, business and user oversight
- **Carwash Owner:** Business ownership, revenue, package and payment settings
- **Carwash Admin:** Daily operations, reservations, and team management
- **Washer:** Assigned jobs, status updates, and field operations

With route-level code splitting, each role loads its own bundle. Unauthorized route access is blocked at both the router and the API layer.

## TanStack Query + Zustand: State Separation

We applied the pattern I learned from my experience at ÇokNet to Let Wash as well:

- **TanStack Query:** API data — business lists, reservations, revenue reports, operation queues
- **Zustand:** UI state — modals, filters, sidebar, temporary form states

This separation reduces unnecessary re-renders and makes the data flow predictable.

## Stripe Connect Integration

We use Stripe Connect so businesses can accept online payments. On the frontend, we embedded onboarding and payout dashboards with \`@stripe/react-connect-js\`. Because payment flows are sensitive, we applied strict type checking in form validation with Zod schemas and React Hook Form.

## Form and Validation Layer

In critical flows like reservation management, business registration, and role assignments:

- Performant form management with **React Hook Form**
- Runtime + compile-time validation with **Zod**
- Combining the two with **@hookform/resolvers**

This trio lets us catch form bugs early, even at startup speed.

## i18n and Production Monitoring

We use i18next for multi-language support in the US market. In production, we monitor frontend errors with Sentry — even if the number of users is small at a startup, an error in the payment or reservation flow is critical.

On the testing side, we write component tests with Vitest and Testing Library. On every PR, \`tsc -b\` typecheck and ESLint run.

## Multi-Role SaaS Architecture

The Let Wash web SaaS has four main roles. The screens, permissions, and workflows of each are separate:

### 1. Root
- Platform-wide business and user management
- System settings and operational oversight
- High-level reporting and intervention screens

### 2. Carwash Owner
- Business profile and payment infrastructure (Stripe Connect onboarding)
- Package, membership, and pricing management
- Revenue and performance analytics

### 3. Carwash Admin
- Daily reservation and operations management
- Team and washer assignments
- Coordination of in-business processes

### 4. Washer
- Wash jobs assigned to them
- Status updates and field operation flows
- A simplified, mobile-friendly interface

For all roles we use a shared UI component library (CVA + Tailwind), built on top of a role-based layout and navigation layer.

## Component Architecture

Over-engineering at a startup is dangerous. We adopted this structure:

\`\`\`
src/
  components/ui/       → Button, Input, Card
  features/            → ReservationManager, StripeOnboarding
  routes/              → TanStack Router role modules
  hooks/               → useReservations, useBusinesses
  stores/              → Zustand stores
\`\`\`

Rather than applying all of Atomic Design, extracting as needed is more pragmatic.

## TypeScript: From the Start or Later?

The answer: **from the start.** Even at a startup, using TypeScript lowers the cost of refactoring. Type safety for API response types, form validations, and component props becomes even more valuable as the team grows.

## The Palo Alto Startup Ecosystem

Founding a startup in Silicon Valley has different dynamics than my experience in Turkey. Investor pitches, the search for product-market fit, and fast pivot decisions are daily reality. As a frontend developer, in this process I take on responsibilities such as:

- Contributing to product decisions from a technical perspective
- Getting prototypes working quickly
- Iterating quickly on user feedback

## What I Learned as a Co-founder

1. **Perfect code does not come before a working product** — but a working product will not last long on unsustainable code either.
2. **User feedback > assumptions:** Build, measure, learn.
3. **Technical debt is taken on deliberately:** Not every shortcut is technical debt; knowing which one you will pay off is what matters.
4. **Choosing the right tool matters more than the stack debate:** Next.js is not required for every project; the Vite + TanStack ecosystem is very productive for dashboard-heavy products.

## Conclusion

Combining the co-founder and frontend developer roles at a startup is a unique experience that develops both technical and product skills. While building the multi-role SaaS panel that spans from Root to Washer at Let Wash with Vite, TanStack Router, React Query, and Stripe Connect, the experience I gained in my previous projects (Qulak, ÇokNet, DNSSense) provides a strong foundation for this journey.

As a frontend developer, being a co-founder who contributes to product decisions rather than just implementing the UI also brings a different perspective career-wise.
`,
    },
  },
  {
    slug: "webrtc-ile-gercek-zamanli-iletisim-platformlari",
    publishedAt: "2026-04-10",
    tags: ["WebRTC", "Socket.IO", "React", "Node.js", "P2P"],
    title: {
      tr: "WebRTC ile Gerçek Zamanlı İletişim Platformları: CommuneNow'dan Live P2P'ye",
      en: "Real-Time Communication Platforms with WebRTC: From CommuneNow to Live P2P",
    },
    description: {
      tr: "Dil öğrenme platformu CommuneNow ve P2P video arama uygulaması Live P2P projelerinde WebRTC ve Socket.IO ile gerçek zamanlı iletişim mimarisini nasıl kurguladım.",
      en: "How I built a real-time communication architecture with WebRTC and Socket.IO in the language-learning platform CommuneNow and the P2P video calling app Live P2P.",
    },
    readingTime: { tr: "8 dk", en: "8 min" },
    content: {
      tr: `
Gerçek zamanlı sesli, görüntülü ve yazılı iletişim, modern web uygulamalarının en zorlu problem alanlarından biridir. WebRTC bu probleme tarayıcı tabanlı bir çözüm sunar; ancak production'a taşımak, basit bir demo yapmaktan çok daha karmaşıktır.

CommuneNow (dil öğrenme platformu) ve Live P2P (peer-to-peer video arama) projelerinde bu teknolojilerle çalıştım. Bu yazıda, gerçek dünya deneyimlerimi paylaşıyorum.

## WebRTC Nedir ve Neden Kullanılır?

WebRTC (Web Real-Time Communication), tarayıcılar arası doğrudan ses, video ve veri iletişimini mümkün kılar. Merkezi bir medya sunucusu olmadan P2P bağlantı kurulabilir — bu da gecikmeyi düşürür ve maliyeti azaltır.

Temel bileşenler:

- **getUserMedia:** Kamera ve mikrofon erişimi
- **RTCPeerConnection:** P2P bağlantı yönetimi
- **RTCDataChannel:** Düşük gecikmeli veri transferi
- **ICE/STUN/TURN:** NAT traversal ve bağlantı kurulumu

## CommuneNow: Dil Öğrenme Platformu

CommuneNow, kullanıcıların gerçek zamanlı sesli ve yazılı iletişimle dil pratiği yapmasını sağlayan bir platformdu. Web ve mobil için React ve Node.js kullanılarak geliştirildi.

### Mimari Kararlar

- **Frontend:** React ile video chat UI, Socket.IO ile signaling
- **Backend:** Node.js + Express, WebRTC signaling server
- **Veritabanı:** MySQL (kullanıcı ve oturum verileri)
- **Signaling:** Socket.IO üzerinden offer/answer/ICE candidate exchange

Signaling server, WebRTC'nin kendisi değil; iki peer'ın birbirini bulmasını sağlayan koordinasyon katmanıdır. Bağlantı kurulduktan sonra medya trafiği doğrudan peer'lar arasında akar.

### Karşılaşılan Zorluklar

1. **NAT ve firewall:** Tüm kullanıcılar P2P bağlantı kuramaz. TURN server gerekebilir.
2. **Mobil tarayıcı kısıtlamaları:** iOS Safari'de autoplay ve background behavior farklıdır.
3. **Bağlantı kalitesi:** Düşük bant genişliğinde video kalitesini düşürmek gerekir.
4. **Eşleştirme algoritması:** Dil seviyesi ve müsaitlik durumuna göre kullanıcı eşleştirmesi

## Live P2P: Veritabanısız Video Arama

Live P2P, tamamen peer-to-peer çalışan, veritabanı içermeyen bir video arama prototipiydi. Amaç: minimum altyapı ile maksimum gizlilik ve düşük gecikme.

### Teknik Yaklaşım

- React frontend
- Socket.IO signaling (oda oluşturma ve katılma)
- WebRTC ile doğrudan video/ses aktarımı
- TailwindCSS ile minimal UI

Veritabanı olmaması, kullanıcı verisi saklanmaması anlamına gelir — gizlilik odaklı bir tasarım. Ancak oda yönetimi ve bağlantı koordinasyonu için signaling server şarttır.

### Öğrenilen Dersler

- P2P her senaryo için uygun değil; 3+ katılımcılı görüşmelerde SFU (Selective Forwarding Unit) gerekir
- Signaling server'ın güvenilirliği, tüm sistemin güvenilirliğini belirler
- Reconnection logic, kullanıcı deneyimini doğrudan etkiler

## Qulak'ta WebRTC Deneyimi

Online sınav platformu Qulak'ta da WebRTC kullandık — bu sefer gözetmen-aday video akışı için. Sınav güvenliği bağlamında:

- Kamera zorunluluğu ve sürekli açık tutma kontrolü
- Ekran paylaşımı izleme
- Bağlantı kopması durumunda sınav duraklatma

Bu kullanım senaryosu, CommuneNow'daki serbest iletişimden çok farklı gereksinimlere sahipti. Aynı teknoloji, farklı domain logic ile birleştiğinde tamamen farklı bir ürün ortaya çıkar.

## WebRTC vs WebSocket: Ne Zaman Hangisi?

| Özellik | WebRTC | WebSocket |
|---------|--------|-----------|
| Kullanım | Ses, video, P2P data | Text, notifications, state sync |
| Gecikme | Çok düşük | Düşük |
| Bant genişliği | Yüksek | Düşük |
| Karmaşıklık | Yüksek | Orta |

Çoğu gerçek zamanlı uygulama ikisini birlikte kullanır: WebSocket signaling ve state için, WebRTC medya için.

## Sonuç

WebRTC, gerçek zamanlı iletişim uygulamaları için güçlü ama öğrenmesi zaman alan bir teknoloji. CommuneNow, Live P2P ve Qulak projelerinde edindiğim deneyim, farklı kullanım senaryolarında aynı teknolojinin nasıl farklı kurgulanması gerektiğini gösterdi.

Gerçek zamanlı sistemler geliştirmek isteyenlere tavsiyem: önce WebSocket ile basit bir chat yapın, sonra WebRTC ekleyin, en son production edge case'lerini (reconnection, TURN, mobile) ele alın.
`,
      en: `
Real-time audio, video, and text communication is one of the most challenging problem areas in modern web applications. WebRTC offers a browser-based solution to this problem; however, taking it to production is far more complex than building a simple demo.

I worked with these technologies in the CommuneNow (language-learning platform) and Live P2P (peer-to-peer video calling) projects. In this post, I share my real-world experiences.

## What Is WebRTC and Why Is It Used?

WebRTC (Web Real-Time Communication) enables direct audio, video, and data communication between browsers. A P2P connection can be established without a central media server — this lowers latency and reduces cost.

Core components:

- **getUserMedia:** Camera and microphone access
- **RTCPeerConnection:** P2P connection management
- **RTCDataChannel:** Low-latency data transfer
- **ICE/STUN/TURN:** NAT traversal and connection setup

## CommuneNow: A Language-Learning Platform

CommuneNow was a platform that let users practice a language through real-time audio and text communication. It was developed for web and mobile using React and Node.js.

### Architectural Decisions

- **Frontend:** Video chat UI with React, signaling with Socket.IO
- **Backend:** Node.js + Express, WebRTC signaling server
- **Database:** MySQL (user and session data)
- **Signaling:** offer/answer/ICE candidate exchange over Socket.IO

The signaling server is not WebRTC itself; it is the coordination layer that lets two peers find each other. Once the connection is established, media traffic flows directly between the peers.

### Challenges Encountered

1. **NAT and firewall:** Not all users can establish a P2P connection. A TURN server may be required.
2. **Mobile browser restrictions:** Autoplay and background behavior differ on iOS Safari.
3. **Connection quality:** Video quality must be lowered on low bandwidth.
4. **Matching algorithm:** Matching users based on language level and availability

## Live P2P: Video Calling Without a Database

Live P2P was a fully peer-to-peer video calling prototype with no database. The goal: maximum privacy and low latency with minimum infrastructure.

### Technical Approach

- React frontend
- Socket.IO signaling (creating and joining rooms)
- Direct video/audio transfer with WebRTC
- Minimal UI with TailwindCSS

Having no database means no user data is stored — a privacy-focused design. However, a signaling server is still essential for room management and connection coordination.

### Lessons Learned

- P2P is not suitable for every scenario; calls with 3+ participants require an SFU (Selective Forwarding Unit)
- The reliability of the signaling server determines the reliability of the whole system
- Reconnection logic directly affects the user experience

## WebRTC Experience on Qulak

We also used WebRTC on the Qulak online exam platform — this time for the proctor-candidate video stream. In the context of exam security:

- Camera requirement and keeping it continuously on
- Screen sharing monitoring
- Pausing the exam when the connection drops

This use case had very different requirements from the free-form communication in CommuneNow. When the same technology is combined with different domain logic, a completely different product emerges.

## WebRTC vs WebSocket: When to Use Which?

| Feature | WebRTC | WebSocket |
|---------|--------|-----------|
| Use | Audio, video, P2P data | Text, notifications, state sync |
| Latency | Very low | Low |
| Bandwidth | High | Low |
| Complexity | High | Medium |

Most real-time applications use both together: WebSocket for signaling and state, WebRTC for media.

## Conclusion

WebRTC is a powerful but time-consuming technology to learn for real-time communication applications. The experience I gained in the CommuneNow, Live P2P, and Qulak projects showed how the same technology needs to be architected differently in different use cases.

My advice to those who want to build real-time systems: first build a simple chat with WebSocket, then add WebRTC, and finally handle production edge cases (reconnection, TURN, mobile).
`,
    },
  },
];
