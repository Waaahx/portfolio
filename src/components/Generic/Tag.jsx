export function TechTag({ name, color }) {
  return (
    <div className="flex items-center gap-2 text-xs font-sans text-gray-300 w-fit">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      {name}
    </div>
  );
}


export function Javascript() {
  return <TechTag name="JavaScript" color="#F7DF1E" />;
}

export function _React() {
  return <TechTag name="React" color="#61DAFB" />;
}

export function NodeJS() {
  return <TechTag name="NodeJS" color="#339933" />;
}

export function Tailwind() {
  return <TechTag name="Tailwind" color="#38B2AC" />;
}

export function MySql() {
  return <TechTag name="MySQL" color="#4479A1" />;
}

export function C() {
  return <TechTag name="C" color="#A8B9CC" />;
}

export function Golang() {
  return <TechTag name="Golang" color="#00ADD8" />;
}

export function Rust() {
  return <TechTag name="Rust" color="#DEA584" />;
}

export function Python() {
  return <TechTag name="Python" color="#3776AB" />;
}

export function Skript() {
  return <TechTag name="Skript" color="#3F3F3F" />;
}

export function VBS() {
  return <TechTag name="VBS" color="#00A2ED" />;
}

export function MongoDB() {
  return <TechTag name="MongoDB" color="#47A248" />;
}

export function Supabase() {
  return <TechTag name="Supabase" color="#3ECF8E" />;
}

export function Shell() {
  return <TechTag name="Shell" color="#111111" />;
}

export function Powershell() {
  return <TechTag name="PowerShell" color="#5391FE" />;
}

export function Java() {
  return <TechTag name="Java" color="#007396" />;
}

export function Gitea() {
  return <TechTag name="Gitea" color="#609926" />;
}

export function GitHub() {
  return <TechTag name="GitHub" color="#181717" />;
}

export function HTML() {
  return <TechTag name="HTML" color="#E34F26" />;
}

export function CSS() {
  return <TechTag name="CSS" color="#1572B6" />;
}

export function Php() {
  return <TechTag name="PHP" color="#777BB3" />;
}
