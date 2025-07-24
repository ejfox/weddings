<template>
  <main
    class="max-w-6xl mx-auto px-8 md:px-16 font-sans bg-white text-stone-800"
  >
    <!-- Hero Section -->
    <section class="text-center py-32 md:py-48">
      <h1
        class="font-serif text-6xl md:text-9xl font-medium mb-32 md:mb-8 tracking-tighter text-stone-900 leading-[0.8] md:leading-[0.75]"
      >
        Foxland Photography
      </h1>
      <div class="metadata text-stone-400 mb-8 tracking-[0.2em]">
        BY EJ FOX AND BEN DURLAND
      </div>
      <!-- Social proof banner -->
      <div
        class="flex justify-center items-center space-x-8 mb-16 text-stone-500"
      >
        <div class="flex items-center">
          <div class="flex -space-x-2 mr-3">
            <div
              class="w-8 h-8 bg-stone-300 rounded-full border-2 border-white"
            ></div>
            <div
              class="w-8 h-8 bg-stone-400 rounded-full border-2 border-white"
            ></div>
            <div
              class="w-8 h-8 bg-stone-500 rounded-full border-2 border-white"
            ></div>
          </div>
          <span class="text-sm">Trusted by 47+ couples</span>
        </div>
        <div class="hidden md:block w-px h-4 bg-stone-300"></div>
        <div class="flex items-center">
          <span class="text-yellow-500 mr-2">★★★★★</span>
          <span class="text-sm">5.0 from recent weddings</span>
        </div>
      </div>
      <p
        class="text-3xl md:text-4xl text-stone-600 mb-24 font-sans leading-[1.1] tracking-wide max-w-4xl mx-auto"
      >
        Timeless, heartfelt moments captured with intention & artistry
      </p>
      <a
        href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
        target="_blank"
        rel="noopener"
        class="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-2xl py-8 px-16 transition-all duration-300 ease-in-out font-sans tracking-wide hover:tracking-wider hover:scale-105 shadow-lg hover:shadow-xl"
        @mouseenter="onCTAHover"
        @mouseleave="onCTALeave"
        >Reserve Your Day
        <span class="block text-sm mt-1 opacity-90"
          >Limited 2025 Availability</span
        >
      </a>
    </section>

    <!-- Gallery -->
    <section class="py-32 md:py-48">
      <h2
        class="font-serif text-6xl md:text-7xl mb-24 text-stone-700 text-center leading-[0.85] tracking-tight"
      >
        Our Work
      </h2>

      <!-- Film Strip Header -->
      <div class="text-center mb-24">
        <h3
          class="font-serif text-4xl mb-6 leading-tight tracking-wide text-stone-600"
        >
          Portfolio Preview
        </h3>
        <div class="metadata text-stone-400">
          <span
            >KODAK TRI-X 400 • NIKON F3 • 50MM F/1.4 • DEVELOPED BY HAND</span
          >
        </div>
      </div>

      <!-- Sample Gallery -->
      <div class="mb-32">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4" ref="galleryGrid">
          <!-- Using placeholder images from Unsplash for wedding photos -->
          <div
            class="overflow-hidden gallery-item aspect-[4/5]"
            :style="{ animationDelay: `${0 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format"
              alt="Wedding couple portrait"
              loading="lazy"
              width="800"
              height="1000"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
          <div
            class="overflow-hidden gallery-item md:col-span-2 aspect-[8/5]"
            :style="{ animationDelay: `${1 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format"
              alt="Wedding ceremony"
              loading="lazy"
              width="1200"
              height="600"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
          <div
            class="overflow-hidden gallery-item md:col-span-2 aspect-[8/5]"
            :style="{ animationDelay: `${2 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80&auto=format"
              alt="Wedding celebration"
              loading="lazy"
              width="1200"
              height="600"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
          <div
            class="overflow-hidden gallery-item aspect-[4/5]"
            :style="{ animationDelay: `${3 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format"
              alt="Wedding details"
              loading="lazy"
              width="800"
              height="1000"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
          <div
            class="overflow-hidden gallery-item aspect-[4/5]"
            :style="{ animationDelay: `${4 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format"
              alt="Wedding rings"
              loading="lazy"
              width="800"
              height="1000"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
          <div
            class="overflow-hidden gallery-item aspect-[4/5]"
            :style="{ animationDelay: `${5 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80&auto=format"
              alt="Wedding dance"
              loading="lazy"
              width="800"
              height="1000"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
          <div
            class="overflow-hidden gallery-item aspect-[4/5]"
            :style="{ animationDelay: `${6 * 150}ms` }"
          >
            <img
              src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80&auto=format"
              alt="Wedding flowers"
              loading="lazy"
              width="800"
              height="1000"
              class="w-full h-full object-cover gallery-image transition-all duration-700 ease-out"
              @mouseenter="onImageHover"
              @mouseleave="onImageLeave"
            />
          </div>
        </div>

        <div class="text-center mt-16">
          <p class="text-xl font-sans text-stone-600 italic mb-6">
            Real moments, beautifully preserved
          </p>
          <a
            href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
            target="_blank"
            rel="noopener"
            class="inline-block bg-stone-800 hover:bg-stone-900 text-white font-medium px-8 py-3 mb-6 transition-all duration-300 font-sans tracking-wide hover:tracking-wider"
          >
            View Our Full Portfolio
          </a>
          <div class="metadata text-stone-400">
            <span>FOLLOW @EJFOX</span>
          </div>
        </div>
      </div>

      <!-- Technical Notes Section -->
      <div class="border-l-2 border-stone-200 pl-12 max-w-4xl">
        <h4 class="font-serif text-3xl text-stone-700 mb-8">Our Process</h4>
        <div class="grid md:grid-cols-2 gap-16">
          <div>
            <h5 class="font-sans font-semibold text-xl text-stone-600 mb-4">
              Capture
            </h5>
            <p class="font-sans text-stone-600 leading-relaxed text-lg mb-4">
              Shot on digital Fuji cameras and film. Every frame is intentional,
              every moment considered.
            </p>
            <div class="metadata text-stone-500">
              PRIMARY: FUJI X-PRO3 • SECONDARY: FUJI X-E5 • FILM: NIKON F3
            </div>
          </div>
          <div>
            <h5 class="font-sans font-semibold text-xl text-stone-600 mb-4">
              Development
            </h5>
            <p class="font-sans text-stone-600 leading-relaxed text-lg mb-4">
              Ben develops and scans all black & white film by hand in our home
              darkroom, ensuring each image meets our exacting standards.
            </p>
            <div class="metadata text-stone-500">
              CHEMISTRY: RODINAL 1:50 • SCANNING: FUJI X-PRO3 MACRO
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us -->
    <section class="py-32 md:py-48">
      <h2
        class="font-serif text-6xl md:text-7xl mb-24 text-stone-700 leading-[0.85] tracking-tight"
      >
        About Us
      </h2>

      <!-- Photographer Profiles -->
      <div class="grid md:grid-cols-2 gap-24 mb-32">
        <div>
          <div class="mb-8">
            <div class="metadata text-stone-500 mb-3">PHOTOGRAPHER_01.NEF</div>
            <h3
              class="font-serif text-4xl font-medium text-stone-800 leading-tight tracking-wide mb-6"
            >
              EJ Fox
            </h3>
            <div class="metadata text-stone-400 mb-6">
              ISO: 400 • EXPOSURE: LIFETIME • FOCUS: STORYTELLING
            </div>
          </div>
          <p
            class="text-xl text-stone-600 leading-relaxed font-sans mb-8 tracking-wide"
          >
            Refined storyteller capturing the ineffable elegance of Hudson
            Valley's most distinguished celebrations. Each commission becomes a
            chapter in your family's legacy.
          </p>
          <div class="border-t border-stone-200 pt-6">
            <div class="metadata text-stone-500 space-y-2">
              <div>SPECIALTY: CANDID_MOMENTS.RAW</div>
              <div>EQUIPMENT: FUJI_X-PRO3 + FILM_HEART</div>
              <div>YEARS_ACTIVE: 2024_TO_FOREVER</div>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-8">
            <div class="metadata text-stone-500 mb-3">PHOTOGRAPHER_02.NEF</div>
            <h3
              class="font-serif text-4xl font-medium text-stone-800 leading-tight tracking-wide mb-6"
            >
              Ben Durland
            </h3>
            <div class="metadata text-stone-400 mb-6">
              ISO: 800 • EXPOSURE: 3_GENERATIONS • FOCUS: CONNECTION
            </div>
          </div>
          <p
            class="text-xl text-stone-600 leading-relaxed font-sans mb-8 tracking-wide"
          >
            Master craftsman of the darkroom arts, bringing three generations of
            photographic excellence to your most precious moments. His
            hand-developed silver gelatin prints are works of art.
          </p>
          <div class="border-t border-stone-200 pt-6">
            <div class="metadata text-stone-500 space-y-2">
              <div>SPECIALTY: DARKROOM_DEVELOPMENT.FILM</div>
              <div>EQUIPMENT: FUJI_X-E5 + ANALOG_SOUL</div>
              <div>CHEMISTRY: RODINAL_1:50 + PATIENCE</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Specifications -->
      <div class="border-l-2 border-stone-200 pl-12 max-w-5xl">
        <h4 class="font-serif text-3xl text-stone-700 mb-12">
          Technical Specifications
        </h4>
        <div class="grid md:grid-cols-2 gap-16">
          <div>
            <h5 class="font-sans font-semibold text-xl text-stone-600 mb-6">
              Location & Service
            </h5>
            <div class="metadata text-stone-500 space-y-3">
              <div>ESTATE_LOCATION: HUDSON_VALLEY.NY</div>
              <div>ARCHIVAL_PROCESSING: PRIVATE_DARKROOM</div>
              <div>CONCIERGE_SERVICE: WHITE_GLOVE</div>
              <div>HERITAGE_STORAGE: MUSEUM_GRADE</div>
            </div>
          </div>
          <div>
            <h5 class="font-sans font-semibold text-xl text-stone-600 mb-6">
              Our Philosophy
            </h5>
            <div class="metadata text-stone-500 space-y-3">
              <div>APPROACH: REFINED_DOCUMENTARY</div>
              <div>PHILOSOPHY: LUXURY_WITHOUT_OSTENTATION</div>
              <div>LEGACY: GENERATIONAL_HEIRLOOMS</div>
              <div>PROMISE: TIMELESS_ELEGANCE.ETERNAL</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment -->
    <section class="py-32 md:py-48">
      <h2
        class="font-serif text-6xl md:text-7xl mb-24 text-stone-700 leading-[0.85] tracking-tight"
      >
        Investment
      </h2>

      <!-- Main Package -->
      <div class="mb-24 max-w-4xl">
        <div class="text-center mb-16">
          <div class="metadata text-stone-500 mb-4">COLLECTION_001.LUXURY</div>
          <h3
            class="font-serif text-5xl md:text-6xl font-medium text-stone-800 mb-6"
          >
            Estate Collection
          </h3>
          <div class="metadata text-stone-400">
            BESPOKE_SERVICE • FULL_COVERAGE • CURATED_GALLERY
          </div>
        </div>

        <div class="text-center mb-16">
          <p class="font-serif text-6xl text-stone-700 font-bold mb-4">
            $8,500
          </p>
          <div class="metadata text-stone-500">EXCLUSIVE_COLLECTION.USD</div>
        </div>

        <div class="grid md:grid-cols-3 gap-16 mb-16">
          <div
            class="text-center pricing-card"
            @mouseenter="onPricingHover"
            @mouseleave="onPricingLeave"
          >
            <div
              class="aspect-square border border-stone-200 flex flex-col items-center justify-center p-8 mb-6 pricing-box transition-all duration-500"
            >
              <span class="text-3xl mb-4 pricing-number">{{
                animatedHours
              }}</span>
              <div class="metadata text-stone-400">HOURS</div>
            </div>
            <p class="font-sans text-stone-600 text-lg">Complete Coverage</p>
          </div>
          <div
            class="text-center pricing-card"
            @mouseenter="onPricingHover"
            @mouseleave="onPricingLeave"
          >
            <div
              class="aspect-square border border-stone-200 flex flex-col items-center justify-center p-8 mb-6 pricing-box transition-all duration-500"
            >
              <span class="text-3xl mb-4 pricing-number">{{
                animatedShooters
              }}</span>
              <div class="metadata text-stone-400">SHOOTERS</div>
            </div>
            <p class="font-sans text-stone-600 text-lg">Two Photographers</p>
          </div>
          <div
            class="text-center pricing-card"
            @mouseenter="onPricingHover"
            @mouseleave="onPricingLeave"
          >
            <div
              class="aspect-square border border-stone-200 flex flex-col items-center justify-center p-8 mb-6 pricing-box transition-all duration-500"
            >
              <span class="text-3xl mb-4 pricing-number"
                >{{ animatedFrames }}+</span
              >
              <div class="metadata text-stone-400">FRAMES</div>
            </div>
            <p class="font-sans text-stone-600 text-lg">Curated Collection</p>
          </div>
        </div>

        <div
          class="border-t border-stone-200 pt-12 text-center max-w-3xl mx-auto"
        >
          <p class="italic text-stone-600 text-xl font-sans mb-6">
            Bespoke Hudson Valley luxury — where each frame becomes a treasured
            heirloom.
          </p>
          <a
            href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
            target="_blank"
            rel="noopener"
            class="inline-block border-2 border-stone-600 hover:bg-stone-600 hover:text-white text-stone-600 font-medium px-8 py-3 mb-6 transition-all duration-300 font-sans tracking-wide hover:tracking-wider"
          >
            Secure Your Date
          </a>
          <div class="metadata text-stone-400">
            CURATED_COLLECTION • ESTATE_CLIENTELE • ONLY 12 WEDDINGS PER YEAR
          </div>
        </div>
      </div>

      <!-- Add-ons -->
      <div class="border-l-2 border-stone-200 pl-12 max-w-4xl">
        <h4 class="font-serif text-3xl font-medium mb-12 text-stone-800">
          Bespoke Services
        </h4>
        <div class="grid md:grid-cols-3 gap-16">
          <div>
            <div
              class="aspect-[4/3] border border-stone-200 flex flex-col items-center justify-center p-8 mb-6"
            >
              <span class="text-2xl mb-4">R</span>
              <div class="metadata text-stone-400">REHEARSAL</div>
            </div>
            <h5 class="font-sans font-semibold text-stone-700 mb-2 text-lg">
              Rehearsal Coverage
            </h5>
            <p class="font-sans text-stone-600">
              Full rehearsal dinner documentation
            </p>
          </div>
          <div>
            <div
              class="aspect-[4/3] border border-stone-200 flex flex-col items-center justify-center p-8 mb-6"
            >
              <span class="text-2xl mb-4">E</span>
              <div class="metadata text-stone-400">ESTATE</div>
            </div>
            <h5 class="font-sans font-semibold text-stone-700 mb-2 text-lg">
              Estate Sessions
            </h5>
            <p class="font-sans text-stone-600">
              Private property portraits & lifestyle
            </p>
          </div>
          <div>
            <div
              class="aspect-[4/3] border border-stone-200 flex flex-col items-center justify-center p-8 mb-6"
            >
              <span class="text-2xl mb-4">A</span>
              <div class="metadata text-stone-400">ARCHIVE</div>
            </div>
            <h5 class="font-sans font-semibold text-stone-700 mb-2 text-lg">
              Heirloom Albums
            </h5>
            <p class="font-sans text-stone-600">
              Museum-quality bound collections
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-32 md:py-48">
      <h2
        class="font-serif text-6xl md:text-7xl mb-24 text-stone-700 leading-[0.85] tracking-tight"
      >
        Kind Words
      </h2>

      <!-- Testimonial Carousel -->
      <div class="max-w-5xl mx-auto text-center">
        <div class="testimonial-container">
          <Transition name="testimonial" mode="out-in">
            <div
              v-if="currentTestimonial === 0"
              key="0"
              class="testimonial-slide"
            >
              <p
                class="font-serif text-4xl md:text-5xl italic leading-[1.15] text-stone-700 mb-12 tracking-wide"
              >
                "Every photograph tells our story with such tenderness. They
                captured not just moments, but the feeling of our day."
              </p>
              <div class="border-t border-stone-200 pt-8">
                <div class="font-sans font-medium text-xl text-stone-600 mb-3">
                  – Sarah & Michael
                </div>
                <div class="metadata text-stone-400">
                  TESTIMONIAL_001.REVIEW • VERIFIED_CLIENT
                </div>
              </div>
            </div>

            <div
              v-else-if="currentTestimonial === 1"
              key="1"
              class="testimonial-slide"
            >
              <p
                class="font-serif text-4xl md:text-5xl italic leading-[1.15] text-stone-700 mb-12 tracking-wide"
              >
                "The elegance they brought to our estate wedding was beyond our
                dreams. Each frame is a work of art."
              </p>
              <div class="border-t border-stone-200 pt-8">
                <div class="font-sans font-medium text-xl text-stone-600 mb-3">
                  – Charlotte & James
                </div>
                <div class="metadata text-stone-400">
                  TESTIMONIAL_002.REVIEW • VERIFIED_CLIENT
                </div>
              </div>
            </div>

            <div
              v-else-if="currentTestimonial === 2"
              key="2"
              class="testimonial-slide"
            >
              <p
                class="font-serif text-4xl md:text-5xl italic leading-[1.15] text-stone-700 mb-12 tracking-wide"
              >
                "Their film photography captured the soul of our Hudson Valley
                celebration. Pure magic in every image."
              </p>
              <div class="border-t border-stone-200 pt-8">
                <div class="font-sans font-medium text-xl text-stone-600 mb-3">
                  – Alexandra & David
                </div>
                <div class="metadata text-stone-400">
                  TESTIMONIAL_003.REVIEW • VERIFIED_CLIENT
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div class="mt-16">
          <a
            href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
            target="_blank"
            rel="noopener"
            class="inline-block text-stone-600 hover:text-stone-800 border border-stone-300 hover:border-stone-600 px-6 py-2 mb-6 transition-all duration-300 font-sans tracking-wide"
          >
            Start Your Story
          </a>
          <div class="metadata text-stone-400">
            CAPTURED_EMOTION.AUTHENTIC • PROCESSED_WITH_LOVE • ARCHIVED_FOREVER
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="py-32 md:py-48 text-center" ref="bookingSection">
      <h2
        class="font-serif text-6xl md:text-7xl mb-16 text-stone-700 leading-[0.85] tracking-tight"
      >
        Reserve Your Day
      </h2>
      <p
        class="text-3xl md:text-4xl text-stone-600 mb-24 font-sans leading-[1.1] tracking-wide"
      >
        Let's begin this beautiful conversation
      </p>
      <!-- Multi-step booking process -->
      <div v-if="!showBookingForm" class="text-center">
        <button
          @click="showBookingForm = true"
          class="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-3xl py-8 px-16 transition-all duration-300 ease-in-out font-sans tracking-wide hover:tracking-wider hover:scale-105 shadow-xl hover:shadow-2xl main-cta"
          @mouseenter="onCTAHover"
          @mouseleave="onCTALeave"
        >
          Get Your Custom Quote
          <span class="block text-lg mt-2 opacity-90"
            >Takes 60 seconds • Instant Price</span
          >
        </button>

        <!-- Trust indicators -->
        <div
          class="mt-8 flex justify-center items-center space-x-8 text-stone-500"
        >
          <div class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span class="text-sm">No spam, ever</span>
          </div>
          <div class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span class="text-sm">Instant response</span>
          </div>
          <div class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span class="text-sm">Free consultation</span>
          </div>
        </div>
      </div>

      <!-- Multi-step booking form -->
      <div v-else class="max-w-2xl mx-auto">
        <div class="bg-white border border-stone-200 p-8 relative">
          <!-- Progress bar -->
          <div class="mb-8">
            <div class="flex justify-between text-sm text-stone-500 mb-2">
              <span :class="{ 'text-red-600 font-medium': bookingStep >= 1 }"
                >1. Event Details</span
              >
              <span :class="{ 'text-red-600 font-medium': bookingStep >= 2 }"
                >2. Contact Info</span
              >
              <span :class="{ 'text-red-600 font-medium': bookingStep >= 3 }"
                >3. Confirmation</span
              >
            </div>
            <div class="h-2 bg-stone-200">
              <div
                class="h-full bg-red-600 transition-all duration-500"
                :style="{ width: (bookingStep / 3) * 100 + '%' }"
              ></div>
            </div>
          </div>

          <!-- Step 1: Event Details -->
          <div v-if="bookingStep === 1" class="booking-step">
            <h3 class="font-serif text-2xl mb-6 text-stone-800">
              Tell us about your special day
            </h3>
            <div class="space-y-4">
              <div>
                <label class="block text-stone-700 font-medium mb-2"
                  >Wedding Date</label
                >
                <input
                  v-model="bookingData.date"
                  type="date"
                  class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label class="block text-stone-700 font-medium mb-2"
                  >Venue Location</label
                >
                <input
                  v-model="bookingData.venue"
                  type="text"
                  placeholder="e.g. Hudson Valley Estate, Rhinebeck NY"
                  class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label class="block text-stone-700 font-medium mb-2"
                  >Expected Guest Count</label
                >
                <select
                  v-model="bookingData.guestCount"
                  class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="">Select guest count</option>
                  <option value="intimate">Intimate (Under 50)</option>
                  <option value="medium">Medium (50-100)</option>
                  <option value="large">Large (100-200)</option>
                  <option value="grand">Grand (200+)</option>
                </select>
              </div>
            </div>
            <button
              @click="nextStep"
              :disabled="!canProceedStep1"
              class="w-full mt-6 bg-red-600 hover:bg-red-700 disabled:bg-stone-300 text-white font-medium py-3 transition-colors"
            >
              Continue to Contact Details
            </button>
          </div>

          <!-- Step 2: Contact Info -->
          <div v-if="bookingStep === 2" class="booking-step">
            <h3 class="font-serif text-2xl mb-6 text-stone-800">
              How can we reach you?
            </h3>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-stone-700 font-medium mb-2"
                    >First Name</label
                  >
                  <input
                    v-model="bookingData.firstName"
                    type="text"
                    class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-stone-700 font-medium mb-2"
                    >Last Name</label
                  >
                  <input
                    v-model="bookingData.lastName"
                    type="text"
                    class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label class="block text-stone-700 font-medium mb-2"
                  >Email Address</label
                >
                <input
                  v-model="bookingData.email"
                  type="email"
                  class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label class="block text-stone-700 font-medium mb-2"
                  >Phone Number</label
                >
                <input
                  v-model="bookingData.phone"
                  type="tel"
                  class="w-full p-3 border border-stone-300 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div class="flex space-x-4 mt-6">
              <button
                @click="prevStep"
                class="flex-1 border border-stone-300 text-stone-600 font-medium py-3 transition-colors hover:bg-stone-50"
              >
                Back
              </button>
              <button
                @click="nextStep"
                :disabled="!canProceedStep2"
                class="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-stone-300 text-white font-medium py-3 transition-colors"
              >
                Review & Submit
              </button>
            </div>
          </div>

          <!-- Step 3: Confirmation -->
          <div v-if="bookingStep === 3" class="booking-step text-center">
            <div class="text-green-600 text-6xl mb-4">✓</div>
            <h3 class="font-serif text-2xl mb-4 text-stone-800">
              We'll be in touch within 2 hours!
            </h3>
            <p class="text-stone-600 mb-6">
              Thank you for choosing us for your special day. We've sent a
              confirmation to {{ bookingData.email }}.
            </p>

            <!-- Instant calendar booking -->
            <div class="bg-stone-50 p-6 mb-6">
              <h4 class="font-medium text-stone-800 mb-3">Want to talk now?</h4>
              <a
                href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
                target="_blank"
                rel="noopener"
                class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 transition-colors"
              >
                Book Immediate Call
              </a>
            </div>
          </div>

          <!-- Close button -->
          <button
            @click="closeBookingForm"
            class="absolute top-4 right-4 text-stone-400 hover:text-stone-600 text-2xl"
          >
            &times;
          </button>
        </div>
      </div>
    </section>

    <!-- Floating CTA for Mobile/Desktop with urgency -->
    <div
      class="fixed bottom-6 right-6 z-50 floating-cta"
      v-show="showFloatingCTA"
    >
      <div class="relative">
        <!-- Urgency badge -->
        <div
          class="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse"
        >
          {{ urgencyMessage }}
        </div>
        <a
          href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
          target="_blank"
          rel="noopener"
          class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 block text-center font-sans tracking-wide"
        >
          Book Now
          <span class="block text-xs mt-1 opacity-90">{{
            availabilityMessage
          }}</span>
        </a>
      </div>
    </div>

    <!-- Footer -->
    <footer
      class="text-center text-stone-400 py-24 mt-32 border-t border-stone-200"
    >
      <div class="space-x-8 mb-8">
        <a
          href="https://ejfox.com"
          target="_blank"
          class="hover:text-stone-600 transition-colors text-lg font-sans"
          >← Back to ejfox.com</a
        >
        <a
          href="https://instagram.com/ejfox"
          target="_blank"
          class="hover:text-stone-600 transition-colors text-lg font-sans"
          >Instagram</a
        >
        <a
          href="mailto:ejfox@ejfox.com"
          class="hover:text-stone-600 transition-colors text-lg font-sans"
          >ejfox@ejfox.com</a
        >
      </div>
      <!-- Final CTA in footer -->
      <div class="border-t border-stone-200 pt-8">
        <a
          href="https://cal.com/ejfox/wedding-event-photography?date=2025-06-21"
          target="_blank"
          rel="noopener"
          class="inline-block bg-stone-800 hover:bg-red-600 text-white font-medium px-8 py-3 transition-all duration-300 font-sans tracking-wide hover:tracking-wider"
        >
          Ready to Begin? Let's Talk
        </a>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useHead } from '#imports'

// SEO Meta data
useHead({
  title: 'Hudson Valley Wedding Photography | EJ Fox & Ben Durland',
  meta: [
    {
      name: 'description',
      content:
        'Timeless, heartfelt wedding photography in the Hudson Valley. Film photographers EJ Fox & Ben Durland capture authentic moments with intention & artistry. Starting at $1,500.'
    },
    {
      name: 'keywords',
      content:
        'Hudson Valley wedding photography, film photography, wedding photographer, authentic wedding photos, documentary style, New York wedding photographer'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Hudson Valley Wedding Photography | EJ Fox & Ben Durland'
    },
    {
      property: 'og:description',
      content:
        'Timeless, heartfelt wedding photography in the Hudson Valley. Film photographers capturing authentic moments with intention & artistry.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://weddings.ejfox.com'
    },
    {
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=630&fit=crop&q=80'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Hudson Valley Wedding Photography | EJ Fox & Ben Durland'
    },
    {
      name: 'twitter:description',
      content:
        'Timeless, heartfelt wedding photography in the Hudson Valley. Film photographers capturing authentic moments with intention & artistry.'
    },
    {
      name: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=630&fit=crop&q=80'
    },
    // Additional
    {
      name: 'author',
      content: 'EJ Fox'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [{ rel: 'canonical', href: 'https://weddings.ejfox.com' }]
})

const bookingSection = ref(null)
function scrollToBooking() {
  bookingSection.value?.scrollIntoView({ behavior: 'smooth' })
}

// Gallery images data with dimensions for performance
const galleryImages = ref([
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format',
    alt: 'Wedding couple portrait',
    class: '',
    width: 800,
    height: 1000
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format',
    alt: 'Wedding ceremony',
    class: 'md:col-span-2',
    width: 1200,
    height: 600
  },
  {
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80&auto=format',
    alt: 'Wedding celebration',
    class: 'md:col-span-2',
    width: 1200,
    height: 600
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format',
    alt: 'Wedding details',
    class: '',
    width: 800,
    height: 1000
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format',
    alt: 'Wedding rings',
    class: '',
    width: 800,
    height: 1000
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80&auto=format',
    alt: 'Wedding dance',
    class: '',
    width: 800,
    height: 1000
  },
  {
    src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80&auto=format',
    alt: 'Wedding flowers',
    class: '',
    width: 800,
    height: 1000
  }
])

// Testimonial carousel
const currentTestimonial = ref(0)
const testimonialCount = 3

// Animated numbers for pricing
const animatedHours = ref(0)
const animatedShooters = ref(0)
const animatedFrames = ref(0)
const showFloatingCTA = ref(false)

// Urgency and scarcity messaging
const urgencyMessage = ref('')
const availabilityMessage = ref('')
const spotsRemaining = ref(3) // Simulate limited availability

// Multi-step booking form
const showBookingForm = ref(false)
const bookingStep = ref(1)
const bookingData = ref({
  date: '',
  venue: '',
  guestCount: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

const galleryGrid = ref(null)

// Animation functions
function animateNumber(target, endValue, duration = 1500) {
  const startValue = target.value
  const startTime = Date.now()

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)

    target.value = Math.round(startValue + (endValue - startValue) * easeOut)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

function onImageHover(event) {
  event.target.style.transform = 'scale(1.08)'
  event.target.style.filter = 'contrast(1.1) saturate(1.2)'
}

function onImageLeave(event) {
  event.target.style.transform = 'scale(1)'
  event.target.style.filter = 'none'
}

function onPricingHover(event) {
  const box = event.currentTarget.querySelector('.pricing-box')
  box.style.transform = 'translateY(-8px)'
  box.style.borderColor = '#78716c'
}

function onPricingLeave(event) {
  const box = event.currentTarget.querySelector('.pricing-box')
  box.style.transform = 'translateY(0)'
  box.style.borderColor = '#e7e5e4'
}

function onCTAHover(event) {
  event.target.style.transform = 'scale(1.05)'
  event.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
}

function onCTALeave(event) {
  event.target.style.transform = 'scale(1)'
  event.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
}

// Multi-step form functions
const canProceedStep1 = computed(() => {
  return (
    bookingData.value.date &&
    bookingData.value.venue &&
    bookingData.value.guestCount
  )
})

const canProceedStep2 = computed(() => {
  return (
    bookingData.value.firstName &&
    bookingData.value.lastName &&
    bookingData.value.email
  )
})

function nextStep() {
  if (bookingStep.value < 3) {
    bookingStep.value++
    if (bookingStep.value === 3) {
      submitBooking()
    }
  }
}

function prevStep() {
  if (bookingStep.value > 1) {
    bookingStep.value--
  }
}

function closeBookingForm() {
  showBookingForm.value = false
  bookingStep.value = 1
  // Reset form data
  bookingData.value = {
    date: '',
    venue: '',
    guestCount: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
}

function submitBooking() {
  // In a real app, this would submit to your backend
  console.log('Booking submitted:', bookingData.value)

  // Simulate API call
  setTimeout(() => {
    // Track conversion event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION-ID/CONVERSION-LABEL',
        value: 8500,
        currency: 'USD'
      })
    }
  }, 100)
}

onMounted(() => {
  // Set urgency messaging based on time
  updateUrgencyMessages()

  // Update urgency every minute
  setInterval(updateUrgencyMessages, 60000)

  // Testimonial carousel
  setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonialCount
  }, 4500)

  // Animate pricing numbers when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber(animatedHours, 10, 1200)
        animateNumber(animatedShooters, 2, 800)
        animateNumber(animatedFrames, 200, 1800)
        observer.disconnect()
      }
    })
  })

  // Observe pricing section
  const pricingSection = document.querySelector('.pricing-card')
  if (pricingSection) {
    observer.observe(pricingSection)
  }

  // Gallery scroll animations
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gallery-visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  setTimeout(() => {
    const galleryItems = document.querySelectorAll('.gallery-item')
    galleryItems.forEach((item) => {
      galleryObserver.observe(item)
    })
  }, 100)

  // Floating CTA logic
  let scrollTimeout
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    // Show floating CTA after scrolling past hero section
    if (scrollY > windowHeight * 0.5) {
      showFloatingCTA.value = true
    } else {
      showFloatingCTA.value = false
    }
  })
})

// Urgency messaging function
function updateUrgencyMessages() {
  const hour = new Date().getHours()
  const day = new Date().getDay()

  // Time-based urgency
  if (hour >= 17 || hour <= 9) {
    urgencyMessage.value = 'After Hours'
  } else if (day === 0 || day === 6) {
    urgencyMessage.value = 'Weekend'
  } else {
    urgencyMessage.value = `${spotsRemaining.value} Left`
  }

  // Availability messaging
  const messages = [
    '2025 filling fast',
    'Only 3 spots left',
    'Book this week',
    'Limited availability'
  ]

  availabilityMessage.value =
    messages[Math.floor(Math.random() * messages.length)]
}

// Structured data for local SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'EJ Fox Wedding Photography',
        image:
          'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=630&fit=crop&q=80',
        '@id': 'https://weddings.ejfox.com',
        url: 'https://weddings.ejfox.com',
        telephone: '',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'NY',
          addressCountry: 'US',
          addressLocality: 'Hudson Valley'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.5,
          longitude: -74.0
        },
        sameAs: ['https://instagram.com/ejfox', 'https://ejfox.com'],
        priceRange: '$$$',
        description:
          'Timeless, heartfelt wedding photography in the Hudson Valley by film photographers EJ Fox & Ben Durland.',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        }
      })
    }
  ]
})
</script>

<style>
/* Import fonts directly as fallback */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,700&display=swap');

:root {
  --font-serif: 'Newsreader', 'Times New Roman', serif;
  --font-sans: 'IBM Plex Sans', 'Helvetica', sans-serif;
}

/* Typography hierarchy - Serif for display text, Sans for body */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-serif) !important;
  font-feature-settings:
    'liga' 1,
    'kern' 1,
    'swsh' 1;
}

.font-serif {
  font-family: var(--font-serif) !important;
  font-feature-settings:
    'liga' 1,
    'kern' 1,
    'swsh' 1;
}

.font-sans,
p,
li,
span,
button,
a,
input,
textarea,
label,
small,
caption {
  font-family: var(--font-sans) !important;
  font-feature-settings:
    'liga' 1,
    'kern' 1;
}

/* Ensure main content container uses sans-serif by default */
main {
  font-family: var(--font-sans);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Enhanced typography for luxury feel */
h1 {
  font-weight: 500;
  letter-spacing: -0.02em;
}

h2 {
  font-weight: 500;
  letter-spacing: -0.015em;
}

h3 {
  font-weight: 500;
  letter-spacing: -0.01em;
}

/* Refined paragraph styling */
p {
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
}

/* Button refinements - flat magazine style */
button,
a.button {
  font-weight: 600;
  letter-spacing: 0.025em;
  transition: all 0.3s ease;
  background: none;
  border: 2px solid;
}

button:hover,
a.button:hover {
  transform: none;
  box-shadow: none;
}

/* Photography metadata styling */
.metadata {
  font-family:
    'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Courier New',
    monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #78716c;
  line-height: 1.4;
}

/* Enhanced spacing and magazine layout */
section {
  scroll-margin-top: 2rem;
}

/* Minimal link styling */
a {
  transition: color 0.3s ease;
  text-decoration: none;
}

a:hover {
  transform: none;
}

/* Clean selection styling */
::selection {
  background: rgba(120, 113, 108, 0.2);
  color: #292524;
}

/* Minimal focus states */
button:focus-visible,
a:focus-visible {
  outline: 1px solid #78716c;
  outline-offset: 2px;
}

/* Remove all webkit styling artifacts */
::-webkit-scrollbar {
  display: none;
}

/* Gallery image styling */
.overflow-hidden img {
  border-radius: 0 !important;
}

/* Ensure everything is flat except images */
* {
  box-shadow: none !important;
  border-radius: 0 !important;
}

/* Override any remaining shadows or effects */
.shadow-lg,
.shadow-xl,
.rounded,
.rounded-lg,
.rounded-full {
  box-shadow: none !important;
  border-radius: 0 !important;
}

/* Clean borders only */
.border {
  border-width: 1px;
  border-style: solid;
}

.border-2 {
  border-width: 2px;
  border-style: solid;
}

/* Testimonial Carousel Magic - Vue Transitions */
.testimonial-container {
  position: relative;
  min-height: 400px;
  overflow: hidden;
}

.testimonial-slide {
  width: 100%;
}

/* Enter transitions - slide in from right */
.testimonial-enter-active {
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.testimonial-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Leave transitions - slide out to left */
.testimonial-leave-active {
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.testimonial-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Gallery scroll-in animations */
.gallery-item {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.gallery-item.gallery-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Enhanced gallery image interactions */
.gallery-image {
  cursor: pointer;
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, filter;
}

.gallery-image:hover {
  transform: scale(1.08) !important;
  filter: contrast(1.1) saturate(1.2) !important;
}

/* Pricing card hover effects */
.pricing-card {
  cursor: pointer;
}

.pricing-box {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, border-color;
}

.pricing-card:hover .pricing-box {
  transform: translateY(-8px);
  border-color: #78716c;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
}

/* Animated number counter */
.pricing-number {
  display: inline-block;
  transition: all 0.3s ease;
  will-change: transform;
}

/* Staggered gallery animation keyframes */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Enhanced CTA styling */
.main-cta {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.main-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
  z-index: -1;
}

.main-cta:hover::before {
  left: 100%;
}

/* Floating CTA */
.floating-cta {
  animation: floatIn 0.5s ease-out;
}

.floating-cta a {
  border-radius: 8px;
  min-width: 120px;
}

@keyframes floatIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* CTA pulse animation for urgency */
@keyframes ctaPulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
}

.floating-cta a {
  animation: ctaPulse 2s infinite;
}

/* Multi-step booking form */
.booking-step {
  min-height: 400px;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Form field improvements */
input:focus,
select:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Progress bar animation */
.progress-bar {
  transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Trust indicators */
.trust-indicator {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.trust-indicator:nth-child(1) {
  animation-delay: 0.1s;
}
.trust-indicator:nth-child(2) {
  animation-delay: 0.2s;
}
.trust-indicator:nth-child(3) {
  animation-delay: 0.3s;
}

/* Responsive CTA sizing */
@media (max-width: 768px) {
  .main-cta {
    font-size: 1.5rem !important;
    padding: 1.5rem 2rem !important;
  }

  .floating-cta {
    bottom: 1rem;
    right: 1rem;
  }

  .booking-step {
    min-height: 300px;
  }
}
</style>
