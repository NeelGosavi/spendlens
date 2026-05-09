"use client";

import { useForm } from "react-hook-form";

export default function AuditForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    localStorage.setItem(
      "audit-form",
      JSON.stringify(data)
    );
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto border border-zinc-800 bg-zinc-950 rounded-[32px] p-10 md:p-14 shadow-2xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            AI Spend Audit
          </h2>

          <p className="text-zinc-400 mt-4">
            Enter your current AI tooling setup
            to discover savings opportunities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            {...register("tool")}
            placeholder="Tool Name"
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-white transition"
          />

          <input
            {...register("plan")}
            placeholder="Current Plan"
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-white transition"
          />

          <input
            {...register("monthlySpend")}
            placeholder="Monthly Spend ($)"
            type="number"
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-white transition"
          />

          <input
            {...register("teamSize")}
            placeholder="Team Size"
            type="number"
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-white transition"
          />

          <select
            {...register("useCase")}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-white transition md:col-span-2"
          >
            <option value="">Primary Use Case</option>
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="mixed">Mixed</option>
          </select>

          <button className="md:col-span-2 bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300">
            Generate Audit
          </button>
        </form>
      </div>
    </section>
  );
}