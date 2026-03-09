"use client";

export default function ShanghaiGoldenAromaWebsite() {
  const signatureDishes = [
    {
      name: "Old Shanghai Fried Noodles",
      desc: "A house favorite with rich wok aroma, savory sauce, and a satisfying classic Shanghai-style bite.",
    },
    {
      name: "Pan-Fried Wontons",
      desc: "Crispy on the bottom, tender inside, and perfect as a snack, side, or shareable starter.",
    },
    {
      name: "Salted Egg Yolk Chicken Wings",
      desc: "Crispy wings coated in a fragrant salted egg yolk sauce with deep umami flavor.",
    },
    {
      name: "Sweet and Sour Pork Ribs",
      desc: "A balanced mix of tangy, sweet, and savory flavors with a glossy finish.",
    },
    {
      name: "Hong Shao Pork with Egg",
      desc: "Slow-braised pork with a rich soy-based glaze, paired with egg for classic comfort.",
    },
    {
      name: "Typhoon Shelter Prawns",
      desc: "Bold, aromatic prawns tossed with garlic-forward flavor inspired by Cantonese seafood classics.",
    },
    {
      name: "Cilantro Beef",
      desc: "Tender beef with bright cilantro flavor for a fresh and savory finish.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_35%),radial-gradient(circle_at_top_left,rgba(245,158,11,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Edmonton Chinese Cuisine • 埃德蒙顿中餐馆</p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Shanghai Golden Aroma</h1>
            </div>
            <a
              href="#contact"
              className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Visit Us
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-medium text-red-700">
                Dine-in • Takeout • Third-Party Delivery
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Comforting Chinese dishes with bold flavor and classic favorites.
                <span className="block mt-2 text-2xl sm:text-3xl font-semibold text-red-700">地道中餐，招牌主食，堂食外卖都方便。</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
                Welcome to Shanghai Golden Aroma, a Chinese restaurant in Edmonton serving satisfying mains, flavorful noodles, and shareable dishes made for both dine-in meals and delivery orders.
                <span className="block mt-4 text-base sm:text-lg text-neutral-700">欢迎来到晓膳 Shanghai Golden Aroma。我们在埃德蒙顿提供适合堂食、外卖和聚餐分享的中式美食，包括招牌主食、经典热菜和人气小吃。</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Explore Menu 菜单
                </a>
                <a
                  href="#delivery"
                  className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
                >
                  Order Online 外卖下单
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-700">House Favorite</p>
                <h3 className="mt-3 text-2xl font-semibold">Old Shanghai Fried Noodles</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Wok aroma, savory depth, and a hearty texture that makes it one of our standout staples.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:mt-10">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">Popular Bite</p>
                <h3 className="mt-3 text-2xl font-semibold">Pan-Fried Wontons</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Crisp, juicy, and easy to share. Great as a starter or a side for a full table.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-700">Customer Pick</p>
                <h3 className="mt-3 text-2xl font-semibold">Salted Egg Yolk Chicken Wings</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Crispy wings wrapped in rich salted egg yolk flavor for a savory and indulgent finish.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:mt-10">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">For Sharing</p>
                <h3 className="mt-3 text-2xl font-semibold">Sweet & Sour Pork Ribs</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Sweet, tangy, and savory all at once, with a glossy sauce that makes every bite satisfying.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">About Us</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">A welcoming spot for classic flavor in Edmonton.</h2>
              <p className="mt-6 text-base leading-7 text-neutral-600">
                Shanghai Golden Aroma brings together hearty Chinese dishes, comforting staples, and popular shareable plates for guests looking for both familiar favorites and bold flavors.
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                Whether you are dining in with family and friends or ordering through a delivery platform, our menu is built around satisfying meals that travel well and taste memorable.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Dine-in Ready", desc: "A comfortable space for casual meals, family dinners, and welcoming service." },
                { title: "Delivery Friendly", desc: "Available through third-party delivery so customers can enjoy our dishes from home." },
                { title: "Signature Dishes", desc: "Focused on standout menu items that are rich, recognizable, and easy to come back for." },
                { title: "Great for Sharing", desc: "Wings, prawns, ribs, wontons, and more for a table full of flavor." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signature" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Signature Dishes</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">The dishes guests should start with.</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">适合第一次下单的顾客，也适合快速浏览招牌菜、热菜、主食和盖浇饭。</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {signatureDishes.map((dish) => (
              <div key={dish.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{dish.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="menu" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Menu 菜单</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Modern, direct, and built for fast ordering.</h2>
              <p className="mt-3 text-base leading-7 text-neutral-600">这一版菜单更适合外卖顾客快速浏览，先看热卖，再直接下单。</p>
            </div>

            <div className="mt-10 grid gap-8">
              {/* Cold Dishes */}
              <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <h3 className="text-2xl font-semibold text-neutral-900">🥗 Cold Dishes 凉菜</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {[
                    ["Century Egg Tofu 皮蛋拌豆腐", "$10.99", "月售50+"],
                    ["Cilantro Pig Ear 香菜猪耳", "$11.99", "月售50+"],
                    ["Hot Enoki Mushroom 热炝金针菇", "$9.99", ""],
                    ["Special Spinach Salad 特色拌菠菜", "$9.99", "月售50+"],
                    ["Aged Vinegar Peanuts 老醋花生", "$8.99", ""],
                    ["Mustard Black Fungus 芥酱黑木耳", "$8.99", ""],
                    ["Cilantro Beef 香菜牛肉", "$23.99", "月售50+"],
                  ].map(([name, price, tag]) => (
                    <div key={name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
                        <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
                      </div>
                      {tag ? <p className="mt-2 text-sm text-neutral-500">{tag}</p> : null}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hot Dishes */}
              <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <h3 className="text-2xl font-semibold text-neutral-900">🔥 Hot Dishes 热菜</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {[
                    ["Braised Pork with Egg 红烧肉烧蛋", "$23.99", "月售100+ · 门店销量第1名"],
                    ["Sweet and Sour Pork Ribs 糖醋排骨", "$22.99", ""],
                    ["Spicy Chongqing Chicken 歌乐山辣子鸡", "$24.99", "月售50+"],
                    ["Northeastern Crispy Sweet Sour Pork 东北锅包肉", "$22.99", ""],
                    ["Black Bean Stir-Fried Pork 豆豉小炒肉", "$22.99", "月售50+"],
                    ["Xinjiang Big Plate Chicken 新疆大盘鸡", "$24.99", ""],
                    ["Mapo Tofu 麻婆豆腐", "$17.99", "月售50+"],
                    ["Sour Long Bean Chicken Giblets 酸豆角鸡杂", "$22.99", "月售50+"],
                    ["Cilantro Beef 香菜牛肉", "$23.99", "月售50+"],
                    ["Cumin Beef 孜然牛肉", "$23.99", ""],
                    ["Green Pepper Tofu Dry Pork 青椒香干炒肉", "$18.99", "月售100+"],
                    ["Dry Pot Cauliflower 干锅花菜", "$20.99", ""],
                    ["Hand-Torn Cabbage 手撕包菜", "$17.99", ""],
                    ["Hot and Sour Shredded Potato 酸辣土豆丝", "$14.99", "月售100+"],
                    ["Shanghai Greens with Crispy Pork Fat 油渣上海青", "$15.99", ""],
                    ["Typhoon Shelter Prawns 避风塘大虾", "$22.99", ""],
                    ["Salted Egg Yolk Prawns 咸蛋黄大虾", "$22.99", ""],
                    ["Salted Egg Yolk Shrimp Tofu 咸蛋黄鲜虾豆腐", "$20.99", ""],
                    ["Salted Egg Yolk Chicken Wings 咸蛋黄鸡翅", "$21.99", ""],
                    ["Shanghai Smoked Fish 上海熏鱼", "$22.99", "等待时长一小时 · 现做现烧 · 月售50+"],
                    ["Pan-Fried Hairtail 干煎带鱼", "$20.99", ""],
                    ["Braised or Sweet Sour Hairtail 红烧or糖醋带鱼", "$21.99", ""],
                    ["Beef Radish Clay Pot 牛肉炖萝卜锅仔", "$23.99", ""],
                    ["Green Pepper Potato Strip 青椒土豆丝", "$15.99", ""],
                    ["Stir-Fried Intestine 酱爆大肠", "$22.99", ""],
                    ["Green Pepper Tripe Slices 青椒肚片", "$22.99", ""],
                    ["Tomato Scrambled Egg 番茄炒蛋", "$17.99", ""],
                    ["Farmhouse Spicy Chicken 农家小炒鸡", "$24.99", ""],
                    ["Minced Pork Green Beans 肉沫四季豆", "$17.99", ""],
                  ].map(([name, price, tag]) => (
                    <div key={name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
                        <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
                      </div>
                      {tag ? <p className="mt-2 text-sm text-neutral-500">{tag}</p> : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Staples */}
                <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                  <h3 className="text-2xl font-semibold text-neutral-900">🍚 Staples 主食</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      ["Signature Beef Noodles 招牌牛肉面", "$18.99", ""],
                      ["Old Shanghai Fried Noodles 老上海炒面", "$16.99", "月售50+"],
                      ["Egg Fried Rice 蛋炒饭", "$14.99", ""],
                      ["Steamed Rice 白米饭", "$2.50", "月售100+"],
                      ["Beef Fried Rice 牛肉炒饭", "$17.99", "超级美味 · 好评如潮"],
                    ].map(([name, price, tag]) => (
                      <div key={name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
                          <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
                        </div>
                        {tag ? <p className="mt-2 text-sm text-neutral-500">{tag}</p> : null}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rice Bowls */}
                <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                  <h3 className="text-2xl font-semibold text-neutral-900">🍛 Rice Bowls 盖浇饭</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      ["Green Pepper Pork Rice 青椒肉丝盖饭", "$15.00", "月售50+"],
                      ["Stir-Fried Pork Rice 小炒肉盖饭", "$15.00", "月售100+"],
                      ["Mapo Tofu Rice 麻婆豆腐盖饭", "$15.00", "月售50+"],
                      ["Tofu Dry Pork Rice 香干炒肉盖饭", "$17.00", "月售50+"],
                      ["Sour Long Bean Giblets Rice 酸豆角鸡杂盖饭", "$17.00", ""],
                      ["Tomato Egg Rice 番茄炒蛋盖饭", "$15.00", ""],
                      ["Braised Pork Egg Rice 红烧肉盖浇饭(含酱蛋)", "$17.00", ""],
                    ].map(([name, price, tag]) => (
                      <div key={name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
                          <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
                        </div>
                        {tag ? <p className="mt-2 text-sm text-neutral-500">{tag}</p> : null}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drinks */}
                <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                  <h3 className="text-2xl font-semibold text-neutral-900">🥤 Drinks 饮料</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      ["Coke 可乐", "$1.99", ""],
                      ["Sprite 雪碧", "$1.99", ""],
                      ["Iced Black Tea 冰红茶/杯(仅限堂食)", "$1.99", "仅限堂食"],
                    ].map(([name, price, tag]) => (
                      <div key={name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-base font-semibold text-neutral-900">{name}</h4>
                          <span className="text-base font-bold text-red-700 whitespace-nowrap">{price}</span>
                        </div>
                        {tag ? <p className="mt-2 text-sm text-neutral-500">{tag}</p> : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="border-b border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-700">Order Online</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Order online for pickup or delivery.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
                享受我们的外卖服务，足不出户品尝地道上海美食。
              </p>
            </div>
            <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
              <p className="text-sm font-semibold text-neutral-500">Order Now 立即下单</p>
              <div className="mt-4 space-y-3">
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
                <li>🍜 Signature braised pork — our #1 bestseller</li>
                <li>🥢 Authentic Shanghai-style noodles and staples</li>
                <li>🦐 Fresh seafood dishes made to order</li>
                <li>🛵 Fast delivery through Fantuan</li>
                <li>🏮 Warm dine-in atmosphere, perfect for family meals</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Shanghai Golden Aroma. All rights reserved.</p>
          <p>Chinese cuisine in Edmonton • Dine-in • Takeout • Delivery • 埃德蒙顿堂食外卖中餐</p>
        </div>
      </footer>
    </div>
  );
}
