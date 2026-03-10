"use client";

function MenuItemWithPhoto({ name, price, tag, photo }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 overflow-hidden">
      <img src={`/${photo}`} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
          <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
        </div>
        {tag ? <p className="mt-1 text-xs text-neutral-500">{tag}</p> : null}
      </div>
    </div>
  );
}

function MenuItemNoPhoto({ name, price, tag }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
        <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
      </div>
      {tag ? <p className="mt-1 text-xs text-neutral-500">{tag}</p> : null}
    </div>
  );
}

function SimpleItem({ name, price, tag }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
        <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
      </div>
      {tag ? <p className="mt-1 text-xs text-neutral-500">{tag}</p> : null}
    </div>
  );
}

export default function ShanghaiGoldenAromaWebsite() {
  const coldWithPhoto = [
    { name: "Century Egg Tofu 皮蛋拌豆腐", price: "$10.99", tag: "月售50+", photo: "皮蛋拌豆腐.png" },
    { name: "Cilantro Pig Ear 香菜猪耳", price: "$11.99", tag: "月售50+", photo: "香菜猪耳.jpg" },
    { name: "Hot Enoki Mushroom 热炝金针菇", price: "$9.99", tag: "", photo: "热呛金针菇.png" },
    { name: "Special Spinach Salad 特色拌菠菜", price: "$9.99", tag: "月售50+", photo: "特色拌菠菜.jpg" },
    { name: "Aged Vinegar Peanuts 老醋花生", price: "$8.99", tag: "", photo: "老醋花生.png" },
    { name: "Mustard Black Fungus 芥酱黑木耳", price: "$8.99", tag: "", photo: "芥酱黑木耳.png" },
    { name: "Cilantro Beef 香菜牛肉", price: "$23.99", tag: "月售50+", photo: "香菜牛肉.jpg" },
  ];

  const hotWithPhoto = [
    { name: "Braised Pork with Egg 红烧肉烧蛋", price: "$23.99", tag: "月售100+ · 门店销量第1名", photo: "红烧肉烧蛋.jpg" },
    { name: "Sweet and Sour Pork Ribs 糖醋排骨", price: "$22.99", tag: "", photo: "糖醋排骨.jpg" },
    { name: "Spicy Chongqing Chicken 歌乐山辣子鸡", price: "$24.99", tag: "月售50+", photo: "歌乐山辣子鸡.jpg" },
    { name: "Northeastern Crispy Pork 东北锅包肉", price: "$22.99", tag: "", photo: "东北锅包肉.jpg" },
    { name: "Black Bean Stir-Fried Pork 豆豉小炒肉", price: "$22.99", tag: "月售50+", photo: "豆豉小炒肉.jpg" },
    { name: "Xinjiang Big Plate Chicken 新疆大盘鸡", price: "$24.99", tag: "", photo: "新疆大盘鸡.png" },
    { name: "Mapo Tofu 麻婆豆腐", price: "$17.99", tag: "月售50+", photo: "麻婆豆腐.jpg" },
    { name: "Typhoon Shelter Prawns 避风塘大虾", price: "$22.99", tag: "", photo: "避风塘大虾.png" },
    { name: "Salted Egg Yolk Chicken Wings 咸蛋黄鸡翅", price: "$21.99", tag: "", photo: "咸蛋黄鸡翅.jpg" },
    { name: "Pan-Fried Hairtail 干煎带鱼", price: "$20.99", tag: "", photo: "干煎带鱼.png" },
    { name: "Dry Pot Cauliflower 干锅花菜", price: "$20.99", tag: "", photo: "干锅花菜.jpg" },
    { name: "Hand-Torn Cabbage 手撕包菜", price: "$17.99", tag: "", photo: "手撕包菜.jpg" },
    { name: "Stir-Fried Intestine 酱爆大肠", price: "$22.99", tag: "", photo: "酱爆大肠.jpg" },
    { name: "Farmhouse Spicy Chicken 农家小炒鸡", price: "$24.99", tag: "", photo: "农家小炒鸡.jpg" },
    { name: "Green Pepper Stir-Fried Pork 青椒炒肉", price: "$18.99", tag: "月售100+", photo: "青椒炒肉.jpg" },
    { name: "Old Shanghai Fried Noodles 老上海炒面", price: "$16.99", tag: "月售50+", photo: "老上海炒面.png" },
  ];

  const hotNoPhoto = [
    { name: "Sour Long Bean Chicken Giblets 酸豆角鸡杂", price: "$22.99", tag: "月售50+" },
    { name: "Cilantro Beef (Hot Dish) 香菜牛肉·热菜", price: "$23.99", tag: "月售50+" },
    { name: "Cumin Beef 孜然牛肉", price: "$23.99", tag: "" },
    { name: "Hot and Sour Shredded Potato 酸辣土豆丝", price: "$14.99", tag: "月售100+" },
    { name: "Shanghai Greens with Pork Fat 油渣上海青", price: "$15.99", tag: "" },
    { name: "Salted Egg Yolk Prawns 咸蛋黄大虾", price: "$22.99", tag: "" },
    { name: "Salted Egg Yolk Shrimp Tofu 咸蛋黄鲜虾豆腐", price: "$20.99", tag: "" },
    { name: "Shanghai Smoked Fish 上海熏鱼", price: "$22.99", tag: "等待时长一小时 · 现做现烧 · 月售50+" },
    { name: "Braised or Sweet Sour Hairtail 红烧or糖醋带鱼", price: "$21.99", tag: "" },
    { name: "Beef Radish Clay Pot 牛肉炖萝卜锅仔", price: "$23.99", tag: "" },
    { name: "Green Pepper Potato Strip 青椒土豆丝", price: "$15.99", tag: "" },
    { name: "Green Pepper Tripe Slices 青椒肚片", price: "$22.99", tag: "" },
    { name: "Tomato Scrambled Egg 番茄炒蛋", price: "$17.99", tag: "" },
    { name: "Minced Pork Green Beans 肉沫四季豆", price: "$17.99", tag: "" },
  ];

  const staples = [
    { name: "Signature Beef Noodles 招牌牛肉面", price: "$18.99", tag: "" },
    { name: "Old Shanghai Fried Noodles 老上海炒面", price: "$16.99", tag: "月售50+" },
    { name: "Egg Fried Rice 蛋炒饭", price: "$14.99", tag: "" },
    { name: "Steamed Rice 白米饭", price: "$2.50", tag: "月售100+" },
    { name: "Beef Fried Rice 牛肉炒饭", price: "$17.99", tag: "超级美味 · 好评如潮" },
  ];

  const riceBowls = [
    { name: "Green Pepper Pork Rice 青椒肉丝盖饭", price: "$15.00", tag: "月售50+" },
    { name: "Stir-Fried Pork Rice 小炒肉盖饭", price: "$15.00", tag: "月售100+" },
    { name: "Mapo Tofu Rice 麻婆豆腐盖饭", price: "$15.00", tag: "月售50+" },
    { name: "Tofu Dry Pork Rice 香干炒肉盖饭", price: "$17.00", tag: "月售50+" },
    { name: "Sour Long Bean Giblets Rice 酸豆角鸡杂盖饭", price: "$17.00", tag: "" },
    { name: "Tomato Egg Rice 番茄炒蛋盖饭", price: "$15.00", tag: "" },
    { name: "Braised Pork Egg Rice 红烧肉盖浇饭(含酱蛋)", price: "$17.00", tag: "" },
  ];

  const drinks = [
    { name: "Coke 可乐", price: "$1.99", tag: "" },
    { name: "Sprite 雪碧", price: "$1.99", tag: "" },
    { name: "Iced Black Tea 冰红茶", price: "$1.99", tag: "仅限堂食 Dine-in only" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_35%),radial-gradient(circle_at_top_left,rgba(245,158,11,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.jpg" alt="Shanghai Golden Aroma" className="h-14 w-14 rounded-2xl object-cover shadow-sm" />
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Edmonton Chinese Cuisine • 埃德蒙顿中餐馆</p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Shanghai Golden Aroma · 晓膳</h1>
              </div>
            </div>
            <a href="#contact" className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Visit Us
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center max-w-2xl">
              <p className="mb-4 inline-flex w-fit rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-medium text-red-700">
                Dine-in • Takeout • Third-Party Delivery
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Comforting Chinese dishes with bold flavor.
                <span className="block mt-2 text-2xl sm:text-3xl font-semibold text-red-700">地道中餐，招牌主食，堂食外卖都方便。</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600">
                Welcome to Shanghai Golden Aroma (晓膳), a Chinese restaurant in Edmonton serving satisfying mains, flavorful noodles, and shareable dishes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#menu" className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
                  Explore Menu 菜单
                </a>
                <a href="https://www.fantuanorder.com/zh-CN/store/Restaurant/ca-1728777131" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">
                  Order on Fantuan 外卖下单
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Menu 菜单</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Our full menu.</h2>
              <div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-3">
                <span className="text-xl">🌶</span>
                <p className="text-sm font-medium text-red-700">所有菜均可选辣度 · No Spice 不辣 / Mild 小辣 / Medium 中辣 / Hot 大辣 — please note when ordering 下单时请备注</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">🥗 Cold Dishes 凉菜</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {coldWithPhoto.map((item) => (
                  <MenuItemWithPhoto key={item.name} {...item} />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-6">🔥 Hot Dishes 热菜</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {hotWithPhoto.map((item) => (
                  <MenuItemWithPhoto key={item.name} {...item} />
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
                {hotNoPhoto.map((item) => (
                  <MenuItemNoPhoto key={item.name} {...item} />
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <h3 className="text-2xl font-semibold mb-6">🍚 Staples 主食</h3>
                <div className="space-y-4">
                  {staples.map((item) => <SimpleItem key={item.name} {...item} />)}
                </div>
              </div>
              <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <h3 className="text-2xl font-semibold mb-6">🍛 Rice Bowls 盖浇饭</h3>
                <div className="space-y-4">
                  {riceBowls.map((item) => <SimpleItem key={item.name} {...item} />)}
                </div>
              </div>
              <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <h3 className="text-2xl font-semibold mb-6">🥤 Drinks 饮料</h3>
                <div className="space-y-4">
                  {drinks.map((item) => <SimpleItem key={item.name} {...item} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="border-y border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Order Online 在线点餐</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Order online for pickup or delivery.</h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">享受我们的外卖服务，足不出户品尝地道上海美食。</p>
            </div>
            <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
              <p className="text-sm font-semibold text-neutral-500">Order Now 立即下单</p>
              <div className="mt-4">
                <a href="https://www.fantuanorder.com/zh-CN/store/Restaurant/ca-1728777131" target="_blank" rel="noreferrer" className="block rounded-2xl bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white">
                  Order on Fantuan 饭团外卖
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Contact & Location</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">Plan your visit.</h2>
              <div className="mt-8 space-y-5 text-base text-neutral-700">
                <div>
                  <p className="font-semibold">Address 地址</p>
                  <p className="text-neutral-600">10558 109 St NW, Edmonton, AB T5H 3B2</p>
                </div>
                <div>
                  <p className="font-semibold">Phone 电话</p>
                  <p className="text-neutral-600">(780) 752-6668</p>
                </div>
                <div>
                  <p className="font-semibold">Hours 营业时间</p>
                  <p className="text-neutral-600">Mon–Sun 11:00 AM – 9:00 PM<br /><span className="text-neutral-500">每天 11:00 AM – 9:00 PM</span></p>
                </div>
                <div>
                  <p className="font-semibold">Quick Links 快速入口</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a href="tel:+17807526668" className="rounded-2xl bg-red-700 px-4 py-3 text-sm font-semibold text-white">Call Now</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=10558+109+St+NW,+Edmonton,+AB+T5H+3B2" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900">Get Directions</a>
                    <a href="https://www.fantuanorder.com/zh-CN/store/Restaurant/ca-1728777131" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900">Order on Fantuan</a>
                    <a href="https://www.instagram.com/shanghaigoldenaroma" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-red-700 to-amber-600 p-8 text-white shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-100">Why Guests Come Back 回头客的理由</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">Homestyle cooking with bold Shanghai flavor.</h2>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-red-50">
                <li>🍜 Signature braised pork — our #1 bestseller 红烧肉烧蛋销量第一</li>
                <li>🥢 Authentic Shanghai-style noodles and staples 地道上海炒面</li>
                <li>🦐 Fresh seafood dishes made to order 新鲜海鲜现做</li>
                <li>🛵 Fast delivery through Fantuan 饭团快速外卖</li>
                <li>🏮 Warm dine-in atmosphere 温馨堂食环境</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Shanghai Golden Aroma · 晓膳. All rights reserved.</p>
          <p>Chinese cuisine in Edmonton • Dine-in • Takeout • Delivery • 埃德蒙顿堂食外卖中餐</p>
        </div>
      </footer>
    </div>
  );
}
