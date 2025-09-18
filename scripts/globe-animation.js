// Initialize Globe Animation
function initGlobe() {
  // Check if the globe container exists
  const container = document.getElementById('globe')
  if (!container) return

  // Create Globe instance
  const globe = Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')(
    container
  )

  // Add animation data (example routes between countries)
  const routes = [
    { startLat: 29.5, startLng: 47.5, endLat: 40.7, endLng: -74.0 }, // Kuwait to NY
    { startLat: 29.5, startLng: 47.5, endLat: 51.5, endLng: -0.1 }, // Kuwait to London
    { startLat: 29.5, startLng: 47.5, endLat: 39.9, endLng: 116.4 }, // Kuwait to Beijing
    { startLat: 29.5, startLng: 47.5, endLat: -23.5, endLng: -46.6 }, // Kuwait to Sao Paulo
  ]

  // Add arcs to the globe
  globe
    .arcsData(routes)
    .arcColor(() => ['rgba(0, 255, 255, 0.6)', 'rgba(0, 100, 255, 0.6)'])
    .arcDashLength(0.5)
    .arcDashGap(1)
    .arcDashAnimateTime(2000)

  // Add points at origin and destination
  globe.pointsData([
    { lat: 29.5, lng: 47.5, size: 0.5, color: 'red' }, // Kuwait
    { lat: 40.7, lng: -74.0, size: 0.3, color: 'blue' }, // NY
    { lat: 51.5, lng: -0.1, size: 0.3, color: 'blue' }, // London
    { lat: 39.9, lng: 116.4, size: 0.3, color: 'blue' }, // Beijing
    { lat: -23.5, lng: -46.6, size: 0.3, color: 'blue' }, // Sao Paulo
  ])

  // Auto-rotate the globe
  globe.controls().autoRotate = true
  globe.controls().autoRotateSpeed = 0.5

  // Adjust camera position
  globe.camera().position.z = 300

  // Handle window resize
  window.addEventListener('resize', () => {
    globe.camera().aspect = container.clientWidth / container.clientHeight
    globe.camera().updateProjectionMatrix()
    globe.renderer().setSize(container.clientWidth, container.clientHeight)
  })
}

// Initialize globe when DOM is loaded
document.addEventListener('DOMContentLoaded', initGlobe)
