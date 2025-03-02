export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "solar", label: "Solar Lights" },
      { id: "street", label: "Stree Lights" },
      { id: "smart", label: "Smart Lights" },
      { id: "recidential", label: "Recidential Lights" },
      { id: "industry", label: "Insdustrial Lights" },
    ],
  },
  {
    label: "Tags",
    name: "tag",
    componentType: "select",
    options: [
      { id: "new", label: "New Sale" },
      { id: "trending", label: "Trending" },
      { id: "EnergyEfficient", label: "Energy-Efficient" },
      { id: "smart", label: "Smart Lighting" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "HOME",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "PRODUCTS",
    path: "/shop/listing",
  },
  {
    id: "About",
    label: "ABOUT",
    path: "/shop/About",
  },
  
  {
    id: "Contact",
    label: "CONTACT",
    path: "/shop/Contact",
  },
  {
    id: "search",
    label: "SEARCH",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  solar: "solar",
  street: "street",
  smart: "smart",
  recidential: "recidential",
  industry: "industry",
};

export const brandOptionsMap = {
  new: "new",
  trending: "trending",
  EnergyEfficient: "EnergyEfficient",
  smart: "SmartLighting",
};

export const filterOptions = {
  category: [
    { id: "solar", label: "Solar Lights" },
    { id: "street", label: "Stree Lights" },
    { id: "smart", label: "Smart Lights" },
    { id: "recidential", label: "Recidential Lights" },
    { id: "industry", label: "Insdustrial Lights" },
  ],
  brand: [
    { id: "new", label: "New Sale" },
    { id: "trending", label: "Trending" },
    { id: "EnergyEfficient", label: "EnergyEfficient" },
    { id: "smart", label: "Smart Lighting" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
