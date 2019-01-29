module.exports = {
  animation: {
    duration: 1000, // >>> Number, 1000
    easing: "easeOutQuart", // >>> String, "easeOutQuart"
    onProgress: null, // >>> Function, null
    onComplete: null // >>> Function, null
  },
  layout: {
    padding: 0 // Number, 0
  },
  legend: {
    display: true, // >>> Boolean, true
    position: "bottom", // >>> String, "top"
    fullWidth: true, // >>> Boolean, true
    // onClick:  // >>> Function
    // onHover: // >>> Function
    reverse: false, // >>> Boolean, false
    labels: {
      boxWidth: 32, // >>> Number, 40
      fontSize: 16, // >>> Number, 12
      fontStyle: "normal", // >>> String, "normal"
      fontColor: "#424242", // >>> Color, "#666",
      padding: 24, // >>> Number, 10
      // generateLabels: // >>> Function
      filter: null, // >>> Function, null
      usePointStyle: false // >>> Boolean, false
    }
  },
  title: {
    display: false, // >>> Boolean, false
    position: "top", // >>> Boolean, false
    fontSize: 24, // >>> Number, 12
    fontFamily: "Montserrat, sans-serif", // >>> "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    fontColor: "#424242", // >>> Color, #666
    fontStyle: "normal", // >>> String, "bold"
    padding: 10, // >>> Number, 10
    lineHeight: 1.2, // >>> Number/String, 1.2
    text: "" // >>> String/String[], ""
  },
  tooltips: {
    enabled: true, // >>> Boolean, true
    custom: null, // >>> Function
    mode: "nearest", // >>> String, "nearest"
    intersect: true, // >>> Boolean, true
    position: "average", // >>> String, "average"
    backgroundColor: "rgba(0,0,0,0.8)", // >>> Color, "rgba(0,0,0,0.8)",
    titleFontFamily: "Montserrat, sans-serif", // >>> String, "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    titleFontSize: 16, // >>> Number, 12
    titleFontStyle: "700", // >>> String, "bold"
    titleSpacing: 2, // >>> Number, 2
    titleMarginBottom: 6, // >>> Number, 6
    bodyFontFamily: "Montserrat, sans-serif", // >>> String, "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    bodyFontSize: 16, // >>> Number, 12
    bodyFontStyle: "normal", // >>> String, "normal"
    bodyFontColor: "#FFFFFF", // >>> Color, "#fff"
    bodySpacing: 2, // >>> Number, 2
    footerFontFamily: "Montserrat, sans-serif", // >>> String, "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    footerFontSize: 16, // >>> Number, 12
    footerFontStyle: "normal", // >>> String, "normal"
    footerFontColor: "#FFFFFF", // >>> Color, "#fff"
    footerSpacing: 2, // >>> Number, 2
    footerMarginTop: 6, // >>> Number, 6
    xPadding: 16, // >>> Number, 6
    yPadding: 8, // >>> Number, 6
    caretPadding: 2, // >>> Number, 2
    caretSize: 8, // >>> Number, 5
    cornerRadius: 8, // >>> Number, 8
    multiKeyBackground: "#FFFFFF", // >>> Color, "#FFFFFF"
    displayColors: true, // >>> Boolean, true
    border: "rgba(0,0,0,0)", // >>> Color, "rgba(0,0,0,0)"
    borderWidth: 0 // >>> Number, 0
  },
  elements: {
    arc: {
      // backgroundColor: "rgba(0,0,0,0.1)",
      // borderColor: "#fff",
      // borderWidth: 2
    }
  },
  responsive: true,
  aspectRatio: 1, // This value makes the animation buggy
  maintainAspectRatio: false
};
