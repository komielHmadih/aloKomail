// Shipping Calculator Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Tab switching functionality
  const tabBtns = document.querySelectorAll('.tab-btn')
  const tabContents = document.querySelectorAll('.tab-content')

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab')

      // Update active tab button
      tabBtns.forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')

      // Show active tab content
      tabContents.forEach((content) => {
        content.classList.remove('active')
        if (content.id === tabId) {
          content.classList.add('active')
        }
      })
    })
  })

  // Calculate shipping for small goods
  const calculateBtn = document.getElementById('calculate-btn')
  if (calculateBtn) {
    calculateBtn.addEventListener('click', function () {
      // Validate form
      const form = document.getElementById('small-goods-form')
      if (!form.checkValidity()) {
        alert('Please fill all required fields')
        return
      }

      // Get form values
      const shippingMethod = document.getElementById('shipping-method').value
      const value = document.getElementById('value').value

      // Calculate price (1.6 times the value)
      let price = 0
      if (value === '100') price = 50 * 1.6
      else if (value === '500') price = 300 * 1.6
      else if (value === '1000') price = 750 * 1.6
      else if (value === '5000') price = 3000 * 1.6
      else if (value === '10000') price = 7500 * 1.6
      else if (value === '100000') price = 55000 * 1.6
      else if (value === '500000') price = 300000 * 1.6
      else if (value === '1000000') price = 750000 * 1.6
      else if (value === '1000001') price = 1500000 * 1.6

      // Calculate estimated time
      let time = 0
      if (shippingMethod === 'air') time = 3
      else if (shippingMethod === 'earth') time = 17
      else if (shippingMethod === 'sea') time = 37

      // Display results
      document.getElementById('calculated-price').textContent =
        '$' + price.toFixed(2)
      document.getElementById('estimated-time').textContent = time + ' days'
      document.getElementById('small-goods-result').style.display = 'block'
    })
  }

  // Show login modal for small goods submission
  const submitSmallRequest = document.getElementById('submit-small-request')
  if (submitSmallRequest) {
    submitSmallRequest.addEventListener('click', function () {
      document.getElementById('login-modal').style.display = 'flex'
    })
  }

  // Huge goods form toggle
  const hugeGoodsFormBtn = document.getElementById('huge-goods-form-btn')
  if (hugeGoodsFormBtn) {
    hugeGoodsFormBtn.addEventListener('click', function () {
      const form = document.getElementById('huge-goods-form')
      form.style.display = form.style.display === 'none' ? 'block' : 'none'
    })
  }

  // Direct call button
  const directCallBtn = document.getElementById('direct-call-btn')
  if (directCallBtn) {
    directCallBtn.addEventListener('click', function () {
      alert('Please call +1234567890 for huge goods shipping inquiries.')
    })
  }

  // File upload functionality
  const fileUpload = document.getElementById('file-upload-area')
  const fileInput = document.getElementById('file-input')
  const fileList = document.getElementById('file-list')

  if (fileUpload && fileInput) {
    fileUpload.addEventListener('click', function () {
      fileInput.click()
    })

    fileInput.addEventListener('change', function () {
      fileList.innerHTML = ''
      if (fileInput.files.length > 0) {
        const list = document.createElement('ul')
        for (let i = 0; i < fileInput.files.length; i++) {
          const item = document.createElement('li')
          item.textContent = fileInput.files[i].name
          list.appendChild(item)
        }
        fileList.appendChild(list)
      }
    })
  }

  // Submit huge goods form
  const submitHugeRequest = document.getElementById('submit-huge-request')
  if (submitHugeRequest) {
    submitHugeRequest.addEventListener('click', function () {
      const form = document.getElementById('huge-goods-form')
      if (!form.checkValidity()) {
        alert('Please fill all required fields')
        return
      }

      // Simulate form submission
      alert(
        'Your request has been submitted successfully! We will contact you shortly.'
      )
      form.reset()
      if (fileList) fileList.innerHTML = ''
      form.style.display = 'none'

      // In a real implementation, you would send the data to your server here
      // which would then send emails and WhatsApp messages
    })
  }

  // Login modal functionality
  const closeModal = document.querySelector('.close-modal')
  if (closeModal) {
    closeModal.addEventListener('click', function () {
      document.getElementById('login-modal').style.display = 'none'
    })
  }

  const loginSubmit = document.getElementById('login-submit')
  if (loginSubmit) {
    loginSubmit.addEventListener('click', function () {
      const form = document.querySelector('.login-form')
      if (!form.checkValidity()) {
        alert('Please fill all required fields')
        return
      }

      // Simulate login and request submission
      alert(
        'Your request has been submitted successfully! You will receive confirmation via email and WhatsApp.'
      )
      document.getElementById('login-modal').style.display = 'none'
      form.reset()

      // In a real implementation, you would:
      // 1. Send the user data to your server to create an account
      // 2. Send the shipping request data
      // 3. Trigger emails and WhatsApp messages
    })
  }

  // Close modal when clicking outside
  window.addEventListener('click', function (event) {
    const loginModal = document.getElementById('login-modal')
    if (event.target === loginModal) {
      loginModal.style.display = 'none'
    }
  })
})
