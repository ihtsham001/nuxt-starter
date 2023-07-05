<template>
  <div v-for="(btn, index) in btnText" :key="index">
    <button
      class="font-semibold hover:text-primary-yellow py-2 px-3 rounded border-2 hover:border-primary-yellow border-gray-300 text-gray-400"
    >
      {{ btn.text }}
    </button>
  </div>
</template>
<script setup>
const btnText = [
  {
    id: "Doesn't Matter",
    text: "Doesn't Matter",
  },
  {
    id: "Accounting/Finance",
    text: "Accounting/Finance",
  },
  {
    id: "Customer Service",
    text: "Customer Service",
  },
  {
    id: "Consulting",
    text: "Consulting",
  },
  {
    id: "Engineering/Product Development",
    text: "Engineering/Product Development",
  },
  {
    id: "Information Technology",
    text: "Information Technology",
  },
  {
    id: "Legal",
    text: "Legal",
  },
  {
    id: "Operations/General Management",
    text: "Operations/General Management",
  },
  {
    id: "Procurement/Logistics",
    text: "Procurement/Logistics",
  },
  {
    id: "Research & Development",
    text: "Research & Development",
  },
  {
    id: "Risk Management",
    text: "Risk Management",
  },
  {
    id: "Sales/Marketing",
    text: "Sales/Marketing",
  },
  {
    id: "Strategic Planning",
    text: "Strategic Planning",
  },
  {
    id: "Other",
    text: "Other",
  },
];
</script>
