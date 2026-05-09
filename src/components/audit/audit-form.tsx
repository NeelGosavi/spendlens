"use client";

import { useState } from "react";

import {
  useFieldArray,
  useForm,
} from "react-hook-form";

import { tools } from "@/data/tools";

import { generateAudit } from "@/lib/audit-engine";

import Results from "./results";

export default function AuditForm() {
  const [auditResult, setAuditResult] =
    useState<any>(null);

  const {
    register,
    control,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      tools: [
        {
          tool: "",
          plan: "",
          spend: "",
          seats: "",
        },
      ],
    },
  });

  const { fields, append, remove } =
    useFieldArray({
      control,
      name: "tools",
    });

  const onSubmit = (data: any) => {
    const formattedData = {
      tools: data.tools.map((tool: any) => ({
        ...tool,
        spend: Number(tool.spend),
        seats: Number(tool.seats),
      })),
    };

    const result =
      generateAudit(formattedData);

    console.log(result);

    setAuditResult(result);

    localStorage.setItem(
      "audit-result",
      JSON.stringify(result)
    );
  };

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto border border-zinc-800 bg-zinc-950 rounded-[32px] p-10 md:p-14">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              AI Spend Audit
            </h2>

            <p className="text-zinc-400 mt-4">
              Analyze your AI tooling stack instantly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 space-y-8"
          >
            {fields.map((field, index) => {
              const selectedTool = watch(
                `tools.${index}.tool`
              );

              return (
                <div
                  key={field.id}
                  className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/40"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select
                      {...register(
                        `tools.${index}.tool`
                      )}
                      className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4"
                    >
                      <option value="">
                        Select Tool
                      </option>

                      {Object.keys(tools).map(
                        (tool) => (
                          <option
                            key={tool}
                            value={tool}
                          >
                            {tool}
                          </option>
                        )
                      )}
                    </select>

                    <select
                      {...register(
                        `tools.${index}.plan`
                      )}
                      className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4"
                    >
                      <option value="">
                        Select Plan
                      </option>

                      {selectedTool &&
                        tools[
                          selectedTool as keyof typeof tools
                        ]?.map((plan) => (
                          <option
                            key={plan}
                            value={plan}
                          >
                            {plan}
                          </option>
                        ))}
                    </select>

                    <input
                      {...register(
                        `tools.${index}.spend`
                      )}
                      placeholder="Monthly Spend ($)"
                      type="number"
                      className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4"
                    />

                    <input
                      {...register(
                        `tools.${index}.seats`
                      )}
                      placeholder="Number of Seats"
                      type="number"
                      className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4"
                    />
                  </div>

                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        remove(index)
                      }
                      className="mt-5 text-red-400 hover:text-red-300"
                    >
                      Remove Tool
                    </button>
                  )}
                </div>
              );
            })}

            <button
              type="button"
              onClick={() =>
                append({
                  tool: "",
                  plan: "",
                  spend: "",
                  seats: "",
                })
              }
              className="w-full border border-dashed border-zinc-700 rounded-2xl py-4 hover:bg-zinc-900 transition"
            >
              + Add Another Tool
            </button>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition">
              Generate Audit
            </button>
          </form>
        </div>
      </section>

      <Results result={auditResult} />
    </>
  );
}