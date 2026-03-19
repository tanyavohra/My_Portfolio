const education = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    institution: "Swami Keshwanand Institute of Technology and Gramothan, Jaipur",
    description: "Currently in II year",
    current: true,
  },
  {
    year: "2022 - 2023",
    title: "12th Grade - 87.6%",
    institution: "Sophia Girls Senior Secondary School, Kota",
    description: "Awarded a trophy for highest marks in English",
  },
  {
    year: "2020 - 2021",
    title: "10th Grade - 94%",
    institution: "Sophia Girls Senior Secondary School, Kota",
    description: "Completed secondary education with distinction",
  },
];

const achievements = [
  { title: "CPC Hackathon", detail: "SKIT Jaipur • 2024", badge: "Winner" },
  { title: "Smart India Hackathon", detail: "College Level • 2024", badge: "Top 25" },
];

const activities = [
  { title: "PRAVAH 2025 Decoration Team", role: "Coordinator", description: "Led creative planning & execution for the annual fest decoration." },
  { title: "Fine Arts & Crafts Club", role: "Member", description: "Active member contributing to creative initiatives at SKIT Jaipur." },
  { title: "Art & Design Exhibitions", role: "Participant", description: "Participated in Beyond the Canvas and Rang Art Exhibition." },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest">My Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Extracurricular & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-bold mb-6">🎓 Education</h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-5">
                  <span className={`text-sm font-medium ${item.current ? "text-primary" : "text-muted-foreground"}`}>
                    {item.year}
                  </span>
                  <h4 className="font-bold mt-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mt-2 italic">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Activities */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-bold mb-4">🏆 Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((a) => (
                  <div key={a.title} className="bg-card border border-primary/30 rounded-2xl p-4">
                    <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      {a.badge}
                    </span>
                    <h4 className="font-bold mt-2">{a.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{a.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">🎯 Activities</h3>
              <div className="space-y-3">
                {activities.map((a) => (
                  <div key={a.title} className="bg-card border border-border rounded-2xl p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-sm">{a.title}</h4>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{a.role}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hobbies</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Art", emoji: "🎨" },
                  { name: "Singing", emoji: "🎤" },
                  { name: "Writing", emoji: "✍️" },
                ].map((h) => (
                  <div key={h.name} className="bg-card border border-border rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">{h.emoji}</span>
                    <span className="text-sm font-medium">{h.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
