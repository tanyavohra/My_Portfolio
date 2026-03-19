const codingSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
  { name: "TypeScript", level: 70 },
];

const softwareSkills = ["🎨 Figma", "✨ Canva", "💻 VS Code", "🔄 Git"];

const languages = [
  { name: "English", level: "Proficient" },
  { name: "Hindi", level: "Fluent" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium uppercase tracking-widest">My Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Coding Skills */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">💻 Coding Skills</h3>
            <div className="space-y-5">
              {codingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Languages */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">🎨 Software Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {softwareSkills.map((skill) => (
                  <div key={skill} className="bg-muted rounded-xl p-3 text-center text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">🌐 Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between bg-muted rounded-xl p-3">
                    <span className="font-medium text-sm">{lang.name}</span>
                    <span className="text-xs bg-gold/15 text-gold px-3 py-1 rounded-full font-medium">
                      {lang.level}
                    </span>
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

export default Skills;
