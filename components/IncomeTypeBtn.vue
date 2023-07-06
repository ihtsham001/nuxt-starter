<template>
  <div v-for="(btn, index) in btnText" :key="index">
    <button
      class="font-semibold py-2 px-3 rounded border-2 border-gray-300 text-gray-400"
      :class="{
        'border-primary-yellow text-primary-yellow': btn.id === selectedId,
      }"
      @click="handleClick(btn.id)"
    >
      {{ btn.text }}
    </button>
  </div>
</template>
<script setup>
const selectedId = useState(() => null);

const handleClick = (id) => {
  selectedId.value = id;
};
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
