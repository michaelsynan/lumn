<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Contact - LUMN',
  description: 'Get in touch with LUMN. We\'d love to hear from you.'
})

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
}

const contactState = reactive<ContactFormState>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref('')
const submitError = ref('')

const inputUi = {
  base: 'bg-[#1b1a20] border-[#3a3542] text-[#f4f3f5] placeholder:text-[#9d96a7]'
}

const textareaUi = {
  base: 'bg-[#1b1a20] border-[#3a3542] text-[#f4f3f5] placeholder:text-[#9d96a7]'
}

const onSubmit = async () => {
  submitSuccess.value = ''
  submitError.value = ''
  isSubmitting.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: contactState.name,
        email: contactState.email,
        subject: contactState.subject,
        message: contactState.message
      }
    })

    submitSuccess.value = 'Thanks for reaching out. We received your message and will get back to you soon.'
    contactState.name = ''
    contactState.email = ''
    contactState.subject = ''
    contactState.message = ''
  }
  catch (error: any) {
    submitError.value = error?.data?.statusMessage || error?.statusMessage || 'Something went wrong while sending your message. Please try again.'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-[#0b0a0d] min-h-screen text-[#f4f3f5]">
    <PageHero
      badge="Get In Touch"
      title="CONTACT US"
      description="Have questions or feedback? We'd love to hear from you. Reach out to our team anytime."
    />

    <section class="border-b border-[#28232f] bg-[#0e0c12] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div class="mx-auto w-full max-w-4xl border border-[#2f2b38] bg-[#16151b] p-6 sm:p-10">
        <UForm
          :state="contactState"
          class="space-y-6"
          @submit="onSubmit"
        >
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <UFormField
              name="name"
              label="Name"
              required
            >
              <UInput
                v-model="contactState.name"
                placeholder="Your name"
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
                v-model="contactState.email"
                type="email"
                placeholder="you@example.com"
                size="lg"
                color="neutral"
                variant="outline"
                :ui="inputUi"
                class="w-full"
              />
            </UFormField>

            <UFormField
              name="subject"
              label="Subject"
              required
              class="sm:col-span-2"
            >
              <UInput
                v-model="contactState.subject"
                placeholder="How can we help?"
                size="lg"
                color="neutral"
                variant="outline"
                :ui="inputUi"
                class="w-full"
              />
            </UFormField>

            <UFormField
              name="message"
              label="Message"
              required
              class="sm:col-span-2"
            >
              <UTextarea
                v-model="contactState.message"
                placeholder="Write your message"
                size="lg"
                color="neutral"
                variant="outline"
                :rows="6"
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
            Send Message
          </UButton>
        </UForm>

        <p
          v-if="submitSuccess"
          class="mt-5 border border-[#d68e49]/45 bg-[#2a1a0c] px-4 py-3 text-sm text-[#f7efe4] sm:text-base"
        >
          {{ submitSuccess }}
        </p>

        <p
          v-if="submitError"
          class="mt-5 border border-[#7f2a2a]/50 bg-[#2a1212] px-4 py-3 text-sm text-[#ffd9d9] sm:text-base"
        >
          {{ submitError }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
