<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Wholesale & Retailers - LUMN',
  description: 'Partner with LUMN to bring premium mushroom-infused functional beverages to your store.'
})

type RetailInquiryState = {
  firstName: string
  lastName: string
  businessName: string
  businessType: string
  email: string
  phone: string
  businessAddress: string
  city: string
  state: string
  zipCode: string
  numberOfLocations: string
  heardAboutLumn: string
  message: string
}

const inquiryState = reactive<RetailInquiryState>({
  firstName: '',
  lastName: '',
  businessName: '',
  businessType: '',
  email: '',
  phone: '',
  businessAddress: '',
  city: '',
  state: '',
  zipCode: '',
  numberOfLocations: '',
  heardAboutLumn: '',
  message: ''
})

const inquirySubmitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

const inputUi = {
  base: 'bg-[#1b1a20] border-[#3a3542] text-[#f4f3f5] placeholder:text-[#9d96a7]'
}

const textareaUi = {
  base: 'bg-[#1b1a20] border-[#3a3542] text-[#f4f3f5] placeholder:text-[#9d96a7]'
}

const supportItems = [
  {
    title: 'PRODUCT EDUCATION',
    description: 'Simple product information to help staff understand what makes LUMN different.'
  },
  {
    title: 'POINT-OF-SALE MATERIALS',
    description: 'Posters, signage, QR materials, and product information designed to help introduce LUMN to customers.'
  },
  {
    title: 'SAMPLING SUPPORT',
    description: 'Where appropriate, LUMN can work with retail partners on sampling and launch events.'
  },
  {
    title: 'SOCIAL SUPPORT',
    description: 'New retail locations can be highlighted across LUMN social channels and retailer communications.'
  },
  {
    title: 'DIRECT RELATIONSHIP',
    description: 'As a growing local brand, retailers work directly with LUMN rather than through layers of corporate support.'
  }
]

const partnerTypes = [
  'Convenience stores',
  'Specialty markets',
  'Coffee shops',
  'Cafes',
  'Delis',
  'Farm markets',
  'Health-conscious retailers',
  'Grab-and-go food locations',
  'Independent grocery stores',
  'Hospitality and specialty beverage locations'
]

const faqItems = ref([
  {
    question: 'Does LUMN require refrigeration?',
    answer: 'Yes. LUMN Original Cold Brew is a refrigerated beverage and should remain in the refrigerated supply chain.',
    isOpen: false
  },
  {
    question: 'Is LUMN available for wholesale purchase?',
    answer: 'Yes. Wholesale availability is currently being expanded through select retail partners.',
    isOpen: false
  },
  {
    question: 'What are your wholesale pricing and case quantities?',
    answer: 'Wholesale pricing, case packs, minimum orders, and delivery information are provided directly to approved retail partners.',
    isOpen: false
  },
  {
    question: 'Do you offer samples?',
    answer: 'Samples may be available for qualified retail accounts. Submit a retailer inquiry and let us know you would like to try the product.',
    isOpen: false
  },
  {
    question: 'Do you provide point-of-sale materials?',
    answer: 'Yes. LUMN can provide select marketing and point-of-sale materials to support retail launch and customer awareness.',
    isOpen: false
  },
  {
    question: 'Can LUMN support multiple locations?',
    answer: 'Yes. Multi-location opportunities are welcome. Include your number of locations in the inquiry form so we can discuss availability and logistics.',
    isOpen: false
  },
  {
    question: 'Where do you currently distribute?',
    answer: 'LUMN is initially focused on Pennsylvania and nearby regional markets, with broader distribution planned as production capacity expands.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  const item = faqItems.value[index]
  if (item) {
    item.isOpen = !item.isOpen
  }
}

const onSubmit = async () => {
  inquirySubmitted.value = false
  submitError.value = ''
  isSubmitting.value = true

  try {
    await $fetch('/api/wholesale-inquiry', {
      method: 'POST',
      body: {
        firstName: inquiryState.firstName,
        lastName: inquiryState.lastName,
        businessName: inquiryState.businessName,
        businessType: inquiryState.businessType,
        email: inquiryState.email,
        phone: inquiryState.phone,
        businessAddress: inquiryState.businessAddress,
        city: inquiryState.city,
        state: inquiryState.state,
        zipCode: inquiryState.zipCode,
        numberOfLocations: inquiryState.numberOfLocations,
        heardAboutLumn: inquiryState.heardAboutLumn,
        message: inquiryState.message
      }
    })

    inquirySubmitted.value = true

    inquiryState.firstName = ''
    inquiryState.lastName = ''
    inquiryState.businessName = ''
    inquiryState.businessType = ''
    inquiryState.email = ''
    inquiryState.phone = ''
    inquiryState.businessAddress = ''
    inquiryState.city = ''
    inquiryState.state = ''
    inquiryState.zipCode = ''
    inquiryState.numberOfLocations = ''
    inquiryState.heardAboutLumn = ''
    inquiryState.message = ''
  }
  catch (error: any) {
    submitError.value = error?.data?.statusMessage || error?.statusMessage || 'Something went wrong while sending your inquiry. Please try again.'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen text-[#f4f3f5]">
    <PageHero
      badge="Partnerships"
      title="WHOLESALE & RETAILERS"
      description="Bring LUMN to your customers with a premium refrigerated cold brew built for modern functional beverage demand."
    />

    <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">WHOLESALE & RETAILERS</h2>
          <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
            Bring LUMN to Your Customers
          </h3>
          <p class="mt-6 text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
            LUMN Original Cold Brew is a premium mushroom-infused cold brew built around a simple
            principle: the coffee comes first.
          </p>
          <p class="mt-5 text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
            Smooth, rich cold brew is infused with Lion's Mane, Cordyceps, and Chaga through Aurora
            Protocol™, our proprietary, patent-pending infusion platform designed to preserve the intended
            beverage experience.
          </p>
          <p class="mt-5 text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
            For retailers, that means a differentiated functional beverage that still feels familiar the moment
            a customer takes the first sip.
          </p>
        </div>

        <div class="bg-[#131019] p-6 sm:p-8">
          <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.7px] text-[#d68e49]">
            Start The Conversation
          </p>
          <div class="mt-5 flex flex-col gap-4">
            <NuxtLink
              to="#retailer-inquiry"
              class="inline-flex items-center justify-center border border-[#d68e49] bg-[#d68e49]/10 px-5 py-3 text-center font-['Cinzel'] text-sm font-semibold uppercase tracking-[1.4px] text-[#f7efe4] transition-colors duration-300 hover:bg-[#d68e49]/20"
            >
              Become A Retailer
            </NuxtLink>

            <!-- <button
              type="button"
              disabled
              class="inline-flex cursor-not-allowed items-center justify-center border border-[#4a414f] bg-[#1a1720] px-5 py-3 text-center font-['Cinzel'] text-sm font-semibold uppercase tracking-[1.4px] text-[#a8a2af]"
            >
              Download Product Info (Coming Soon)
            </button> -->
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-[#28232f] bg-[#0b0a0d] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto w-full max-w-7xl">
        <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">WHY LUMN</h2>
        <h3 class="mt-4 max-w-4xl font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
          A Functional Beverage Customers Do Not Have To Learn To Like
        </h3>
        <p class="mt-6 max-w-5xl text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
          The functional beverage category continues to grow, but many products ask consumers to compromise on flavor.
          LUMN takes the opposite approach. We start with the beverage experience first and integrate the functional
          ingredients behind it.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">PREMIUM COLD BREW
            </p>
            <p class="mt-4 text-sm leading-[1.75] text-[#d7d3dc]">Rich, smooth, chocolate-forward coffee designed to
              stand on its own.</p>
          </article>
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">FUNCTIONAL
              MUSHROOMS</p>
            <p class="mt-4 text-sm leading-[1.75] text-[#d7d3dc]">Lion's Mane, Cordyceps, and Chaga integrated into
              every bottle.</p>
          </article>
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">PROPRIETARY
              TECHNOLOGY</p>
            <p class="mt-4 text-sm leading-[1.75] text-[#d7d3dc]">Powered by Aurora Protocol™, LUMN's proprietary,
              patent-pending mushroom-infusion platform.</p>
          </article>
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">DISTINCTIVE
              POSITIONING</p>
            <p class="mt-4 text-sm leading-[1.75] text-[#d7d3dc]">A premium product designed to stand apart from both
              conventional cold brew and traditional mushroom beverages.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">THE PRODUCT</h2>
          <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
            LUMN ORIGINAL COLD BREW
          </h3>
          <p class="mt-2 font-['Cinzel'] text-xs uppercase tracking-[1.5px] text-[#f7efe4] sm:text-sm">
            Mushroom-Infused Cold Brew Coffee
          </p>
          <p class="mt-1 font-['Cinzel'] text-xs uppercase tracking-[1.5px] text-[#d68e49] sm:text-sm">
            Lion's Mane • Cordyceps • Chaga • 12 fl oz • Keep Refrigerated
          </p>

          <p class="mt-6 text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
            Smooth. Rich. Chocolate-forward. Crafted for customers who want something more from their daily beverage
            without giving up the coffee experience they already enjoy.
          </p>

          <div class="mt-8">
            <NuxtLink
              to="/functional-beverages/cold-brew"
              class="inline-flex items-center gap-2 border border-[#d68e49] px-5 py-3 font-['Cinzel'] text-sm font-semibold uppercase tracking-[1.3px] text-[#f7efe4] transition-colors duration-300 hover:bg-[#d68e49]/12"
            >
              View Cold Brew
              <span>→</span>
            </NuxtLink>
          </div>
        </div>

        <div class=" p-6 sm:p-8">
          <img
            src="/lumn-mushroom-infused-cold-brew.webp"
            alt="LUMN Original Cold Brew Bottle"
            class="mx-auto w-full max-w-[340px] object-contain"
          >
        </div>
      </div>
    </section>

    <section class="border-b border-[#28232f] bg-[#0b0a0d] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto w-full max-w-7xl">
        <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">BUILT FOR THE COOLER</h2>
        <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
          Designed To Get Noticed
        </h3>
        <p class="mt-6 max-w-5xl text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
          LUMN was created to look as premium as it tastes. The dark bottle presentation, metallic-inspired branding,
          and copper accents give the product a distinctive shelf presence while clearly communicating cold brew,
          functional mushrooms, and premium positioning.
        </p>
        <p class="mt-5 max-w-5xl text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
          Whether placed beside specialty coffee, functional beverages, energy drinks, or premium grab-and-go products,
          LUMN is designed to create curiosity at the cooler.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">PREMIUM PACKAGING
            </p>
            <p class="mt-3 text-sm leading-[1.75] text-[#d7d3dc]">Designed to stand apart in refrigerated retail.</p>
          </article>
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">CLEAR
              DIFFERENTIATION</p>
            <p class="mt-3 text-sm leading-[1.75] text-[#d7d3dc]">Cold brew plus functional mushrooms plus proprietary
              infusion technology.</p>
          </article>
          <article class="bg-[#131019] p-6">
            <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.6px] text-[#d68e49]">STRONG STORY</p>
            <p class="mt-3 text-sm leading-[1.75] text-[#d7d3dc]">A product customers can understand quickly and
              retailers can explain easily.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">WHO LUMN IS FOR</h2>
          <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
            A Fit for Independent Retail
          </h3>
          <p class="mt-6 text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
            LUMN is currently focused on building strong relationships with independent and regional retailers.
          </p>

          <ul class="mt-7 grid grid-cols-1 gap-2 text-sm text-[#f4f3f5] sm:grid-cols-2 sm:text-base">
            <li
              v-for="type in partnerTypes"
              :key="type"
              class="flex items-start gap-2"
            >
              <span class="mt-2 h-1.5 w-1.5 bg-[#d68e49]" />
              {{ type }}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">RETAILER SUPPORT</h2>
          <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
            We Do Not Just Drop Off Cases
          </h3>
          <p class="mt-6 text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
            LUMN is being built with retail sell-through in mind. Retail partners may receive support including:
          </p>

          <div class="mt-7 space-y-4">
            <article
              v-for="item in supportItems"
              :key="item.title"
              class="bg-[#131019] p-5"
            >
              <p class="font-['Cinzel'] text-xs font-semibold uppercase tracking-[1.5px] text-[#d68e49]">{{ item.title
              }}</p>
              <p class="mt-2 text-sm leading-[1.75] text-[#d7d3dc]">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-[#28232f] bg-[#0b0a0d] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto w-full max-w-5xl text-center">
        <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">LOCAL ROOTS. GROWING REACH.</h2>
        <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
          Built in Pennsylvania
        </h3>
        <p class="mx-auto mt-6 max-w-3xl text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
          LUMN began through small-batch beverage development in Pennsylvania and is currently expanding through select
          retail partners. Our immediate focus is building strong local and regional distribution before expanding
          farther.
        </p>
        <p class="mx-auto mt-5 max-w-3xl text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
          If you operate a retail location and think LUMN could be a fit for your customers, we would like to hear from
          you.
        </p>
      </div>
    </section>

    <section
      id="retailer-inquiry"
      class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-14 sm:px-8 sm:py-20 lg:px-12"
    >
      <div class="mx-auto w-full max-w-6xl">
        <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">INTERESTED IN CARRYING LUMN?</h2>
        <h3 class="mt-4 font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[46px]">
          Become a LUMN Retail Partner
        </h3>
        <p class="mt-6 max-w-4xl text-base leading-[1.85] text-[#d7d3dc] sm:text-lg">
          Tell us a little about your business and we will follow up with current availability, wholesale information,
          product specifications, and next steps.
        </p>

        <div class="mt-10 border border-[#2f2b38] bg-[#16151b] p-6 sm:p-10">
          <UForm
            :state="inquiryState"
            class="space-y-6"
            @submit="onSubmit"
          >
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UFormField
                name="firstName"
                label="First Name"
                required
              >
                <UInput
                  v-model="inquiryState.firstName"
                  placeholder="First name"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="lastName"
                label="Last Name"
                required
              >
                <UInput
                  v-model="inquiryState.lastName"
                  placeholder="Last name"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="businessName"
                label="Business Name"
                required
                class="sm:col-span-2"
              >
                <UInput
                  v-model="inquiryState.businessName"
                  placeholder="Business name"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="businessType"
                label="Business Type"
                required
              >
                <UInput
                  v-model="inquiryState.businessType"
                  placeholder="Cafe, convenience store, market, etc."
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="numberOfLocations"
                label="Number of Locations"
                required
              >
                <UInput
                  v-model="inquiryState.numberOfLocations"
                  placeholder="1"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="email"
                label="Email"
                required
              >
                <UInput
                  v-model="inquiryState.email"
                  type="email"
                  placeholder="name@business.com"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="phone"
                label="Phone"
                required
              >
                <UInput
                  v-model="inquiryState.phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="businessAddress"
                label="Business Address"
                required
                class="sm:col-span-2"
              >
                <UInput
                  v-model="inquiryState.businessAddress"
                  placeholder="Street address"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="city"
                label="City"
                required
              >
                <UInput
                  v-model="inquiryState.city"
                  placeholder="City"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="state"
                label="State"
                required
              >
                <UInput
                  v-model="inquiryState.state"
                  placeholder="State"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="zipCode"
                label="ZIP Code"
                required
              >
                <UInput
                  v-model="inquiryState.zipCode"
                  placeholder="ZIP code"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="heardAboutLumn"
                label="How did you hear about LUMN?"
                class="sm:col-span-2"
              >
                <UInput
                  v-model="inquiryState.heardAboutLumn"
                  placeholder="Referral, social media, event, etc."
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :ui="inputUi"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                name="message"
                label="Message / Anything we should know?"
                class="sm:col-span-2"
              >
                <UTextarea
                  v-model="inquiryState.message"
                  placeholder="Tell us about your store, timeline, and what you'd like to carry."
                  size="lg"
                  color="neutral"
                  variant="outline"
                  :rows="5"
                  :ui="textareaUi"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UButton
              type="submit"
              size="xl"
              color="secondary"
              variant="solid"
              :loading="isSubmitting"
              class="w-full justify-center border border-[#d68e49] bg-[#d68e49] px-6 py-3 font-['Cinzel'] text-sm font-semibold uppercase tracking-[1.4px] text-[#1a130d] hover:bg-[#e59f5a]"
            >
              Submit Retailer Inquiry
            </UButton>
          </UForm>

          <p
            v-if="inquirySubmitted"
            class="mt-5 border border-[#d68e49]/45 bg-[#2a1a0c] px-4 py-3 text-sm text-[#f7efe4] sm:text-base"
          >
            Thanks for your interest in LUMN. We will be in touch with wholesale information and next steps.
          </p>

          <p
            v-if="submitError"
            class="mt-5 border border-[#7f2a2a]/50 bg-[#2a1212] px-4 py-3 text-sm text-[#ffd9d9] sm:text-base"
          >
            {{ submitError }}
          </p>
        </div>
      </div>
    </section>

    <section class="border-b border-[#28232f] bg-[#0b0a0d] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto w-full max-w-5xl">
        <h2 class="text-[13px] font-semibold uppercase tracking-[3px] text-[#d68e49]">WHOLESALE FAQ</h2>
        <div class="mt-8 divide-y divide-[#28232f] border-y border-[#28232f]">
          <div
            v-for="(item, idx) in faqItems"
            :key="item.question"
            class="py-5"
          >
            <button
              class="flex w-full cursor-pointer items-center justify-between py-2 text-left font-medium text-white transition-colors hover:text-[#d68e49]"
              @click="toggleFaq(idx)"
            >
              <span class="font-['Cinzel'] text-base tracking-wide sm:text-lg">{{ item.question }}</span>
              <UIcon
                name="i-mdi-chevron-down"
                class="ml-4 size-5 shrink-0 text-[#d68e49] transition-transform duration-200"
                :class="item.isOpen ? 'rotate-180' : ''"
              />
            </button>
            <div
              v-show="item.isOpen"
              class="pb-2 pt-3 text-sm leading-relaxed text-[#a5a2aa] sm:text-base"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden border-b border-[#28232f] px-4 py-16 sm:px-8 sm:py-24 lg:px-12"
      style="background: radial-gradient(ellipse 1200px 520px at 50% 30%, rgba(214,142,73,0.13) 0%, rgba(11,10,13,1) 100%);"
    >
      <div class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <h2 class="font-['Cormorant_Garamond'] text-[34px] leading-tight text-[#f4f3f5] sm:text-[48px] lg:text-[60px]">
          GIVE YOUR COOLER SOMETHING DIFFERENT.
        </h2>
        <p class="max-w-3xl text-base leading-[1.8] text-[#d7d3dc] sm:text-lg">
          Premium cold brew. Functional mushrooms. Proprietary infusion technology.
        </p>
        <div class="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <NuxtLink
            to="#retailer-inquiry"
            class="inline-flex items-center justify-center border border-[#d68e49] bg-[#d68e49]/12 px-6 py-3 font-['Cinzel'] text-sm font-semibold uppercase tracking-[1.4px] text-[#f7efe4] transition-colors duration-300 hover:bg-[#d68e49]/20"
          >
            Become A Retailer
          </NuxtLink>
          <NuxtLink
            to="/find-lumn"
            class="inline-flex items-center justify-center border border-[#4a414f] px-6 py-3 font-['Cinzel'] text-sm font-semibold uppercase tracking-[1.4px] text-[#f4f3f5] transition-colors duration-300 hover:border-[#d68e49] hover:text-[#d68e49]"
          >
            Find Lumn
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
