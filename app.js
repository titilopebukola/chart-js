const data = {
  labels: [
    "banana",
    "boots",
    "unicorn",
    "mug",
    "wine cup",
    "boxes",
    "scissors",
  ],
  datasets: [
    {
      label: "Scores",
      data: [70, 50, 160, 90, 100, 175, 1],
      backgroundColor: [
        "pink",
        "purple",
        "olive",
        "onion",
        "violet",
        "blue",
        "teal",
      ],
      borderColor: ["magento", "blue"],
      borderWidth: 2,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

let canvasChart = document.getElementById("myChart");
const myChart = new Chart(canvasChart, config);
