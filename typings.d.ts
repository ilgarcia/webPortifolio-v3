type Section = "#home" | "#about" | "#portfolio" | "#experience" | "#contact"

interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
}