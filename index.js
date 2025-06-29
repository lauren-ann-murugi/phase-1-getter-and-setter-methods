class Circle {
  // Constructor to initialize radius
  constructor(radius) {
    this.radius = radius; // Store the radius in the instance
  }

  //  GETTERS 

  // Get the diameter of the circle
  get diameter() {
    // Diameter is twice the radius
    return this.radius * 2;
  }

  // Get the circumference of the circle
  get circumference() {
    // Circumference is π * diameter
    return Math.PI * this.diameter;
  }

  // Get the area of the circle
  get area() {
    // Area is π * r^2
    return Math.PI * (this.radius ** 2);
  }

  // SETTERS 

  // Set radius based on given diameter
  set diameter(value) {
    // Radius is half of diameter
    this.radius = value / 2;
  }

  // Set radius based on given circumference
  set circumference(value) {
    // Circumference = 2πr => r = circumference / (2π)
    this.radius = value / (2 * Math.PI);
  }

  // Set radius based on given area
  set area(value) {
    // Area = πr^2 => r = sqrt(area / π)
    this.radius = Math.sqrt(value / Math.PI);
  }
}
