const FOODS=[
{
id:1,
n:"Classic Smash Burger",
img:"images/burger.jpg",
c:"Burger",
p:250,
e:"🍔",
r:4.9,
d:"Double smash patty, cheddar, special sauce, brioche bun.",
i:["Beef patty","Cheddar","Lettuce","Special sauce","Brioche bun"]
},
{id:2,
n:"Margherita Pizza",
img:"images/pizz1.jpg",
c:"Pizza",
p:350,
e:"🍕",
r:4.8,
d:"San Marzano tomatoes, fresh mozzarella and basil.",
i:["Tomato","Mozzarella","Basil","Thin crust"]
},
{
id:3,
n:"Fried Chicken Bucket",
img:"images/buck.jpg",
c:"Fried Chicken",
p:420,
e:"🍗",
r:4.7,
d:"Crispy golden chicken pieces with spicy coating.",
i:["Chicken","Spice mix","Flour","Oil"]
},
{
id:4,
n:"Chicken Biryani",
img:"images/biryani.jpg",
c:"Biryani",
p:280,
e:"🍛",
r:4.9,
d:"Long grain basmati rice cooked with tender chicken.",
i:["Basmati rice","Chicken","Spices","Onion","Mint"]
},
{
id:5,
n:"Veggie Burger",
img:"images/cheezy.jpg",
c:"Burger",
p:200,
e:"🥪",
r:4.5,
d:"Crispy veg patty with fresh veggies and mayo.",
i:["Veg patty","Lettuce","Tomato","Mayo"]
},
{id:6,
n:"Pepperoni Pizza",
img:"images/veg pizza.jpg",
c:"Pizza",
p:420,
e:"🍕",
r:4.6,
d:"Loaded with pepperoni and extra cheese.",
i:["Pepperoni","Cheese","Tomato sauce"]
},
{id:7,
n:"Mutton Biryani",
img:"images/mutton.jpg",
c:"Biryani",
p:380,
e:"🍲",
r:4.8,
d:"Slow cooked mutton with aromatic rice.",
i:["Mutton","Basmati rice","Spices","Ghee"]
},
{
id:8,
n:"Fresh Fruit Shake",
img:"images/fruit shake.jpg",
c:"Drinks",
p:120,
e:"🥤",
r:4.7,
d:"Strawberry and banana blended with milk.",
i:["Strawberry","Banana","Milk","Ice"]
},
{
id:9,n:"Cold Coffee",
img:"images/cold coffee.jpg",
c:"Drinks",
p:110,
e:"🧋",
r:4.4,
d:"Chilled coffee with ice cream.",

i:["Coffee","Milk","Ice cream"]
},
{id:10,
n:"Hot Wings",
img:"images/wings.jpg",
c:"Fried Chicken",
p:260,
e:"🍖",
r:4.6,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:11,
n:"Panner fried Rice",
img:"images/panner fried Rice.jpg",
c:"Fried Rice Variety",
p:200,
e:"🍖",
r:4.8,
d:"Spicy panner rice with yummy.",
i:["Panner","Hot sauce","Garlic dip"]
},
{id:12,
n:"Tandoori Prawn",
img:"images/Tandoori prawn.jpg",
c:"Sea Foods",
p:270,
e:"🍖",
r:4.5,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:13,
n:"French Fries",
img:"images/french fries.jpg",
c:"Chats",
p:50,
e:"🍖",
r:4.6,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:14,
n:"Donut",
img:"images/donut.jpg",
c:"Dessert",
p:200,
e:"🍖",
r:4.3,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:15,
n:"Egg Biryani",
img:"images/egg bir.jpg",
c:"Biryani",
p:150,
e:"🍖",
r:4.1,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:14,
n:"Chacolate Ice Cream",
img:"images/chocolate ice cream.jpg",
c:"Dessert",
p:250,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{
id:15,
n:"Hibiscus Juice",
img:"images/hibiscus.jpg",
c:"Drinks",
p:80,
e:"🥤",
r:4.3,
d:"Strawberry and banana blended with milk.",
i:["Strawberry","Banana","Milk","Ice"]
},
{
id:16,
n:"Lemon Mojito",
img:"images/lemon juice.jpg",
c:"Drinks",
p:60,
e:"🥤",
r:4.7,
d:"Strawberry and banana blended with milk.",
i:["Strawberry","Banana","Milk","Ice"]
},

{
id:17,
n:"Mango Mojito",
img:"images/mango juice.jpg",
c:"Drinks",
p:80,
e:"🥤",
r:4.3,
d:"Strawberry and banana blended with milk.",
i:["Strawberry","Banana","Milk","Ice"]
},
{
id:18,
n:"Blue Mojito",
img:"images/mojito.jpg",
c:"Drinks",
p:70,
e:"🥤",
r:4.7,
d:"Strawberry and banana blended with milk.",
i:["Strawberry","Banana","Milk","Ice"]
},
{
id:19,
n:"Orange Mojito",
img:"images/orange.jpg",
c:"Drinks",
p:120,
e:"🥤",
r:4.7,
d:"Strawberry and banana blended with milk.",
i:["Strawberry","Banana","Milk","Ice"]
},
{id:20,
n:"Pista Ice Cream",
img:"images/pista.jpg",
c:"Dessert",
p:200,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:21,
n:"Kulfy Ice Cream",
img:"images/kulfi.jpg",
c:"Dessert",
p:100,
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:22,
n:"Strawberry Ice Cream",
img:"images/ice 1.jpg",
c:"Dessert",
p:201,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:23,
n:"Falooda",
img:"images/falooda.png",
c:"Dessert",
p:250,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:24,
n:"Crab Fry",
img:"images/crab fry.jpg",
c:"Sea Foods",
p:200,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:25,
n:"Fish Fry",
img:"images/fish fry.jpg",
c:"Sea Foods",
p:100,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:26,
n:"Squid Fry",
img:"images/squid fry.jpg",
c:"Sea Foods",
p:200,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:27,
n:"Sandwich",
img:"images/sandwich1.jpg",
c:"Chats",
p:60,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:28,
n:"Veg Sandwich",
img:"images/sandwich.jpg",
c:"Chats",
p:50,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:29,
n:"Momos",
img:"images/momos.jpg",
c:"Chats",
p:80,
e:"🍖",
r:4.1,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:30,
n:"PaniPuri",
img:"images/panipuri.jpg",
c:"Chats",
p:40,
e:"🍖",
r:5.0,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
},
{id:31,
n:"Samosa",
img:"images/chat1.jpg",
c:"Chats",
p:200,
e:"🍖",
r:4.9,
d:"Spicy chicken wings with dip.",
i:["Wings","Hot sauce","Garlic dip"]
}

];
const CATS=["Burger","Pizza","Fried Chicken","Biryani","Drinks","Dessert","Fried Rice Variety","Sea Foods","Chats"];
const $=s=>document.querySelector(s),L=(k,d)=>JSON.parse(localStorage.getItem(k)||d),S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const P=document.body.dataset.page,Q=new URLSearchParams(location.search),A=$('#app');
const cart=()=>L('bb_cart','{}'),count=()=>Object.values(cart()).reduce((a,b)=>a+b,0),money=n=>'₹'+n;
const items=()=>Object.entries(cart()).map(([id,q])=>({...FOODS.find(f=>f.id==id),q}));
const sub=()=>items().reduce((a,f)=>a+f.p*f.q,0),fee=s=>s&&s<500?40:0;
function head(){
$('#hdr').innerHTML=`<header>
<a class="logo" href="index.html">Bite<b>Bliss</b></a>
<nav>${
[['index','Home'],['menu','Menu'],['orders','My Orders'],['about','About']].map(([h,t])=>`
<a href="${
h}
.html" class="${P==h?'on':''}">${t}</a>`).join('')
}
</nav>
<a class="cartbtn" href="cart.html">🛒 ${count()}</a>
</header>`
}
function toast(m){
let t=$('#toast');
if(!t){
    t=document.createElement('div');
    t.id='toast';
    document.body.append(t)
}
t.textContent=m;
t.classList.add('show');
setTimeout(()=>t.classList.remove('show'),1500)
}
function add(id,q=1){
const c=cart();
c[id]=(c[id]||0)+q;
S('bb_cart',c);
head();
toast('Added to cart 🛒')
}
function setQ(id,d){
const c=cart();
c[id]+=d;
if(c[id]<1)delete c[id];
S('bb_cart',c);
head();
pages.cart()
}

const pic = f => f.img 
  ? `<img class="food-thumb" src="${f.img}" alt="${f.n}">` 
  : f.e;
const card=f=>`
<div class="card">
<a href="details.html?id=${f.id}" class="img">${pic(f)}</a>
<h3>${f.n}</h3>
<p>⭐ ${f.r} · ${f.c}</p>
<div class="row"><b>${money(f.p)}</b>
<button class="btn sm" onclick="add(${f.id})">+</button>
</div>
</div>`;
const pages={
index(){A.innerHTML=`
<section class="hero">


<video class="hero-video"
src="videos/burger.mp4" autoplay muted loop playsinline></video>

<div class="hero-content">
<h1>Hot food, <br><span>fast delivery</span> 🔥</h1>
<p>Burgers, pizza, biryani and more at your door in 30 minutes.</p>
<a class="btn" href="menu.html">Order Now</a>
</div>
</section>
<h2>Categories</h2>
<div class="chips">${
CATS.map(c=>`<a class="chip" href="menu.html?cat=${c}">${c}</a>`).join('')
}
</div>
<h2>Popular Right Now</h2>
<div class="grid">${FOODS.filter(f=>f.r>=4.7).slice(0,4).map(card).join('')

}
</div>
<div class="box row" style="margin-top:30px">
<div>
<h3>Free delivery above ₹500</h3>
<p style="color:var(--m)">Fill your cart and we skip the delivery fee.</p>
</div><a class="btn" href="menu.html">Order now</a></div>`
},
menu(){
let cat=Q.get('cat')||'All',s='';
const draw=()=>{
$('#list').innerHTML=FOODS.filter(f=>(cat=='All'||f.c==cat)&&f.n.toLowerCase().includes(s)).map(card).join('')||'<p>No items found. Try another search.</p>';
document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('on',b.dataset.c==cat))
};
A.innerHTML=`<h2>Our Menu</h2><input id="q" placeholder="Search food...">
<div class="chips">
${['All',...CATS].map(c=>`
<button class="chip" data-c="${c}">${c}</button>`).join('')
}
</div>
<div class="grid" id="list">
</div>`;
$('#q').oninput=e=>{
s=e.target.value.toLowerCase();draw()
};
document.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{cat=b.dataset.c;draw()});draw()
},
details(){
const f=FOODS.find(x=>x.id==Q.get('id'))||FOODS[0];
let q=1;A.innerHTML=`
<div class="two">
<div class="box big">
${pic(f)

}
</div>
<div class="box">
<h2 style="margin-top:0">
${f.n}</h2>
<p>⭐ ${f.r} · ${f.c}</p>
<p style="margin:14px 0">${f.d}</p>
<h3>Ingredients</h3>
<p>${f.i.map(i=>`<span class="tag">${i}</span>`).join('')
}</p>
<p class="total" style="margin:16px 0">
${money(f.p)

}</p>
<div class="qty">
<button id="m">−</button><b id="n">1</b>
<button id="pl">+</button></div><br><button class="btn" id="a">Add to cart</button></div>
</div>`;$('#m').onclick=()=>{q=Math.max(1,q-1);$('#n').textContent=q};$('#pl').onclick=()=>{q++;$('#n').textContent=q};$('#a').onclick=()=>add(f.id,q)},
cart(){
const it=items(),s=sub();A.innerHTML=it.length?`
<h2>Your Cart</h2>
<div class="two">
<div class="box">${
it.map(f=>`
    <div class="item"><span class="e">${pic(f)}</span>
    <div class="row"><div><b>${f.n}</b>
    <p>${money(f.p)}</p>
    </div>
    <div class="qty">
    <button onclick="setQ(${f.id},-1)">−</button>${f.q}
    <button onclick="setQ(${f.id},1)">+</button>
    </div><b>${money(f.p*f.q)}</b></div></div>`).join('')}</div>
    <div class="box">
    <h3>Summary</h3>
    <p class="row">Subtotal <span>${money(s)}</span></p>
    <p class="row">Delivery <span>${fee(s)?money(fee(s)):'FREE'}</span>
    </p><hr>
    <p class="row total">Total <span>${money(s+fee(s))}</span></p><br><a class="btn" href="checkout.html">Checkout</a>
    </div>
    </div>`:
    `<div class="center">
    <h2>Your cart is empty</h2>
    <a class="btn" href="menu.html">Browse menu</a>
    </div>`
},
checkout(){
const s=sub();
if(!s)return location.href='cart.html';
A.innerHTML=`<h2>Checkout</h2>
<div class="two">
<form class="box" id="f">
<label>Name</label>
<input required id="nm">
<label>Phone</label>
<input required pattern="[0-9]{10}" title="10 digit number" id="ph">
<label>Address</label><textarea required id="ad"></textarea><label>Payment</label>
<select id="pm">
<option>Cash on Delivery</option>
<option>UPI</option>
<option>Card</option>
</select>
<button class="btn">Place order</button>
</form><div class="box">
<h3>Order summary</h3>
${
items().map(f=>`<p class="row">${f.n} × ${f.q}<span>${money(f.p*f.q)}</span></p>`).join('')}<hr>
<p class="row total">Total <span>${money(s+fee(s))}</span></p>
</div>
</div>`;$('#f').onsubmit=e=>{e.preventDefault();const id='BB'+Date.now().toString().slice(-6),o=L('bb_orders','[]');
    o.unshift({id,addr:$('#ad').value,pay:$('#pm').value,items:items().map(f=>`${f.n} × ${f.q}`),total:s+fee(s),date:new Date().toLocaleString(),status:'Preparing'});
S('bb_orders',o);S('bb_cart',{});location.href='success.html?id='+id}
},
success(){
A.innerHTML=`
<div class="center">
<div style="font-size:5rem">✅</div>
<h2>Order placed!</h2>
<p>Your order ID</p>
<p class="total">${(Q.get('id')||'').replace(/[^A-Z0-9]/g,'')}</p>
<p style="margin:14px 0;color:var(--m)">Delivery in about 30 minutes.</p>
<a class="btn" href="orders.html">View orders</a> 
<a class="btn ghost" href="menu.html">Order more</a>
</div>`
},
orders(){
const o=L('bb_orders','[]');
A.innerHTML='<h2>My Orders</h2>'+(o.map(x=>`
<div class="box">
<div class="row"><b>#${x.id}</b><span class="tag">${x.status}</span>
</div>
<p style="margin:8px 0">${x.items.join(', ')}</p>
<p class="row"><small>${x.date} · ${x.pay}</small><span class="total">${money(x.total)}</span></p>
</div>`).join('')||'<p>No orders yet. Pick something tasty from the menu.</p>')
},
about(){
A.innerHTML=`
<img class="ab" src="images/abt.jpg" alt="Our kitchen" onerror="this.remove()">
<h2>About Bite <span>Bliss...</span></h2>
<p style="color:var(--m);max-width:650px">BiteBliss is a fast food delivery kitchen. Fresh ingredients, hot food and delivery in about 30 minutes.</p>
<h2>Contact us</h2>
<div class="two">
<form class="box" id="f">
<input required placeholder="Your name">
<input type="email" required placeholder="Email">
<textarea required placeholder="Message"></textarea>
<button class="btn">Send message</button>
</form>
<div class="box">
<p>📍 Chennai, Tamil Nadu</p>
<p>📞 +91 98765 43210</p>
<p>✉️ hello@bitebliss.com</p>
<p>⏰ 10 AM to 11 PM</p>
</div>
</div>`;$('#f').onsubmit=e=>{e.preventDefault();e.target.reset();toast('Message sent ✅')
    
}}};
head();pages[P]();
document.body.insertAdjacentHTML('beforeend',`<footer><h2>Bite<span>Bliss.</span></h2>
        <p>Made with ❤️ for food lovers.</p>
        <p>© 2026 BiteBliss. All rights reserved.</p></footer>`);
