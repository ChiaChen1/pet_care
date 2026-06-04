"use client";

import type { FormEvent } from "react";

export function BookingForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const fieldClass =
    "min-h-12 w-full rounded-lg border border-line bg-cloud px-3.5 py-3 font-sans text-ink outline-none transition focus:border-mint-deep focus:shadow-[0_0_0_4px_rgba(142,217,204,.22)]";

  return (
    <form
      className="rounded-lg border border-line bg-white p-[30px] shadow-panel"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <h3 className="text-2xl font-extrabold text-ink">快速預約</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-muted">
          飼主姓名
          <input className={fieldClass} type="text" name="name" placeholder="王小美" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted">
          聯絡電話
          <input className={fieldClass} type="tel" name="phone" placeholder="0912-345-678" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted">
          毛孩種類
          <select className={fieldClass} name="pet" defaultValue="小型犬">
            <option>小型犬</option>
            <option>中大型犬</option>
            <option>貓咪</option>
            <option>其他</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted">
          預約服務
          <select className={fieldClass} name="service" defaultValue="基礎沐浴">
            <option>基礎沐浴</option>
            <option>美容造型</option>
            <option>皮毛護理</option>
            <option>接送服務</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted sm:col-span-2">
          預期到店時間
          <input className={fieldClass} type="datetime-local" name="arrivalTime" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted sm:col-span-2">
          備註
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            name="message"
            placeholder="例如：怕吹風、皮膚敏感、希望修成圓臉、需要接送。"
          />
        </label>
      </div>
      <button
        className="mt-4 inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-full bg-coral px-5 font-extrabold text-white shadow-[0_12px_24px_rgba(240,122,103,.24)]"
        type="submit"
      >
        送出預約
      </button>
      <p className="mt-4 text-sm text-muted">
        此示範頁面不會真的送出資料，串接表單服務後即可正式收件。
      </p>
    </form>
  );
}
