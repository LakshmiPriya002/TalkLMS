export default function Stats() {
  const stats = [
    // { number: "500+", label: "Institutions" },
    // { number: "10K+", label: "Teachers" },
    // { number: "50K+", label: "Students" },
  ];

  return (
    <section className="py-16 px-6 bg-blue-600 text-white text-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div key={i}>
            <h4 className="text-4xl font-bold">{s.number}</h4>
            <p className="text-lg">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
