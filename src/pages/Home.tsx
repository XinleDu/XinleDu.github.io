import { useState } from 'react'
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  User,
  X,
} from 'lucide-react'

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  link?: string
  note?: string
}

interface PubGroup {
  category: string
  papers: Publication[]
}

const publications: PubGroup[] = [
  {
    category: 'AI + Systems',
    papers: [
      {
        title: 'Harmonics: Scalable Collective Scheduling in Multi-Tenant GPU Clusters',
        authors: 'Hossein Shafieirad, Amir Shani, Manaf Bin-Yahya, Seyed Hossein Mortazavi, Geng Li, Xinle Du, Tao Su, Wei Wang, Jingbin Zhou, Majid Ghaderi',
        venue: 'Proc. ACM Netw. (CoNEXT)',
        year: '2025',
        link: 'https://doi.org/10.1145/3768985',
      },
      {
        title: 'FlexSpark: Robust and Efficient Multi-Device Collaborative Inference over Wireless Network',
        authors: 'Yiyang Shao, Hongyi Li, Shuihai Hu, Xinle Du, Hao Wu, Jingbin Zhou, Kun Tan',
        venue: 'APNet',
        year: '2025',
        link: 'https://doi.org/10.1145/3735358.3735368',
      },
      {
        title: 'PRED: Performance-oriented Random Early Detection for Consistently Stable Performance in Datacenters',
        authors: 'Xinle Du, Tong Li, Guangmeng Zhou, Zhuotao Liu, Hanlin Huang, Xiangyu Gao, Mowei Wang, Kun Tan, Ke Xu',
        venue: 'NSDI',
        year: '2025',
        link: 'https://www.usenix.org/conference/nsdi25/presentation/du',
      },
    ],
  },
  {
    category: 'Datacenter Networking',
    papers: [
      {
        title: 'AutoRec: Accelerating Loss Recovery for Live Streaming in a Multi-Supplier Market',
        authors: 'Tong Li, Xu Yan, Bo Wu, Cheng Luo, Fuyu Wang, Jiuxiang Zhu, Haoyi Fang, Xinle Du, Ke Xu',
        venue: 'IEEE Trans. Netw.',
        year: '2026',
        link: 'https://doi.org/10.1109/TON.2025.3642008',
      },
      {
        title: 'DiffECN: Differential ECN Marking for Datacenter Networks',
        authors: 'Hanlin Huang, Ke Xu, Tong Li, Zhuotao Liu, Xinle Du, Xiangyu Gao',
        venue: 'IEEE Trans. Netw.',
        year: '2025',
        link: 'https://doi.org/10.1109/TNET.2024.3477511',
      },
      {
        title: 'Revisiting Random Early Detection Tuning for High-Performance Datacenter Networks',
        authors: 'Tong Li, Xinle Du, Xiangyu Gao, Guangmeng Zhou, Hanlin Huang, Zhuotao Liu, Mowei Wang, Kun Tan, Ke Xu',
        venue: 'IEEE Trans. Netw.',
        year: '2025',
        link: 'https://doi.org/10.1109/TON.2025.3572145',
      },
      {
        title: 'Re-Architecting Buffer Management in Lossless Ethernet',
        authors: 'Hanlin Huang, Xinle Du, Tong Li, Haiyang Wang, Ke Xu, Mowei Wang, Huichen Dai',
        venue: 'IEEE/ACM Trans. Netw.',
        year: '2024',
        link: 'https://doi.org/10.1109/TNET.2024.3430989',
      },
      {
        title: 'R-AQM: Reverse ACK Active Queue Management in Multitenant Data Centers',
        authors: 'Xinle Du, Ke Xu, Lei Xu, Kai Zheng, Meng Shen, Bo Wu, Tong Li',
        venue: 'IEEE/ACM Trans. Netw.',
        year: '2023',
        link: 'https://doi.org/10.1109/TNET.2022.3228186',
        note: 'Also appeared in ICNP\'21',
      },
    ],
  },
  {
    category: 'Network Security & Others',
    papers: [
      {
        title: 'Concord: Airtime-Aware Contention Control for Taming Tail Latency from Wi-Fi Frame Bursting',
        authors: 'Fengqian Guo, Siqi Wei, Sihao Miao, Xinle Du, Hancheng Lu',
        venue: 'ACM SIGCOMM',
        year: '2026',
        note: 'To appear',
      },
      {
        title: 'Secure Fault Localization in Path Aware Networking',
        authors: 'Songtao Fu, Qi Li, Xiaoliang Wang, Su Yao, Xuewei Feng, Ziqiang Wang, Xinle Du, Kao Wan, Ke Xu',
        venue: 'IEEE Trans. Dependable Secur. Comput.',
        year: '2025',
        link: 'https://doi.org/10.1109/TDSC.2024.3392486',
      },
      {
        title: 'Stable Byzantine Fault Tolerance in Wide Area Networks With Unreliable Links',
        authors: 'Sitong Ling, Zhuotao Liu, Qi Li, Xinle Du, Jing Chen, Ke Xu',
        venue: 'IEEE/ACM Trans. Netw.',
        year: '2024',
        link: 'https://doi.org/10.1109/TNET.2024.3461872',
      },
      {
        title: 'Performant TCP over Wi-Fi Direct',
        authors: 'Hanlin Huang, Ke Xu, Xinle Du, Yiyang Shao, Jie Li, Xiangyu Gao, Tong Li',
        venue: 'IWQoS',
        year: '2024',
      },
      {
        title: 'Toward Timeliness-Enhanced Loss Recovery for Large-Scale Live Streaming',
        authors: 'Bo Wu, Tong Li, Cheng Luo, Xu Yan, Fuyu Wang, Xinle Du, Ke Xu',
        venue: 'ACM Multimedia',
        year: '2024',
      },
      {
        title: 'D3: Lightweight Secure Fault Localization in Edge Cloud',
        authors: 'Songtao Fu, Qi Li, Xiaoliang Wang, Su Yao, Xuewei Feng, Ziqiang Wang, Xinle Du, Kao Wan, Ke Xu',
        venue: 'ICDCS',
        year: '2022',
      },
      {
        title: 'SmartCrowd: Decentralized and Automated Incentives for Distributed IoT System Detection',
        authors: 'Bo Wu, Ke Xu, Qi Li, Zhuotao Liu, Yih-Chun Hu, Zhichao Zhang, Xinle Du, Bingyang Liu, Shoushou Ren',
        venue: 'ICDCS',
        year: '2019',
      },
    ],
  },
]

function AuthorHighlight({ authors }: { authors: string }) {
  const parts = authors.split('Xinle Du')
  if (parts.length === 1) return <>{authors}</>
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong className="text-slate-800">Xinle Du</strong>}
        </span>
      ))}
    </>
  )
}

function PubGroupComponent({ group }: { group: PubGroup }) {
  const [expanded, setExpanded] = useState(group.category === 'AI + Systems')

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 w-full text-left group mb-3"
      >
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
        )}
        <h3 className="text-base font-semibold text-slate-700 underline underline-offset-4 decoration-slate-300 group-hover:decoration-blue-400 transition-colors">
          {group.category}
        </h3>
      </button>
      {expanded && (
        <ul className="space-y-4 pl-6">
          {group.papers.map((paper, idx) => (
            <li key={idx} className="leading-relaxed">
              <div className="font-medium text-slate-800 text-[15px]">
                {paper.link ? (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {paper.title}
                  </a>
                ) : (
                  paper.title
                )}
                {paper.note && (
                  <span className="text-red-500 font-medium text-sm ml-2">{paper.note}</span>
                )}
              </div>
              <div className="text-slate-500 text-sm mt-0.5">
                <AuthorHighlight authors={paper.authors} />
              </div>
              <div className="text-slate-600 text-sm mt-0.5">
                <em>{paper.venue}</em>, {paper.year}.
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 ml-2 inline-flex items-center gap-0.5 text-sm"
                  >
                    [PDF] <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white sticky top-0 z-50">
        <span className="font-semibold text-slate-800">Xinle Du</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-12 z-40 bg-white px-4 py-6">
          <nav className="space-y-4">
            <button onClick={() => scrollTo('home')} className="block text-blue-600 font-medium">Home</button>
            <button onClick={() => scrollTo('publications')} className="block text-slate-600">Publications</button>
            <a href="https://scholar.google.com/citations?user=LC-SxrMAAAAJ" target="_blank" rel="noopener noreferrer" className="block text-slate-600 flex items-center gap-1">Google Scholar <ExternalLink className="w-3 h-3" /></a>
            <a href="https://github.com/xinledu" target="_blank" rel="noopener noreferrer" className="block text-slate-600 flex items-center gap-1">GitHub <ExternalLink className="w-3 h-3" /></a>
          </nav>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Contact</div>
            <div className="text-sm text-slate-700">xinledu@yeah.net</div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-[260px] lg:shrink-0 bg-[#f8f9fa] border-r border-slate-200 sticky top-0 h-screen overflow-y-auto">
          <div className="p-6 flex flex-col flex-grow">
            {/* Photo */}
            <div className="mb-5">
              <img
                src="./photo.jpg"
                alt="Xinle Du"
                className="w-full rounded-lg shadow-sm object-cover aspect-[4/5]"
              />
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold text-slate-800 mb-0.5">Xinle Du</h1>
            <p className="text-sm text-slate-500 mb-4">杜鑫乐</p>

            {/* Title */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-6 w-fit">
              Agentic Infra &middot; LLM Serving
            </div>

            {/* Navigation */}
            <nav className="space-y-1 mb-8">
              <button
                onClick={() => scrollTo('home')}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md"
              >
                <User className="w-4 h-4" /> Home
              </button>
              <button
                onClick={() => scrollTo('publications')}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                <BookOpen className="w-4 h-4" /> Publications
              </button>
              <a
                href="https://scholar.google.com/citations?user=LC-SxrMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                <GraduationCap className="w-4 h-4" /> Google Scholar <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
              <a
                href="https://github.com/xinledu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
            </nav>

            {/* Contact */}
            <div className="mt-auto pt-6 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Contact Info</h3>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>xinledu AT yeah.net</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-xs text-slate-400 text-center">
              Built with React & Tailwind
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Mobile photo */}
          <div className="lg:hidden px-4 pt-6 pb-4 flex items-center gap-4">
            <img
              src="./photo.jpg"
              alt="Xinle Du"
              className="w-20 h-20 rounded-lg object-cover shadow-sm"
            />
            <div>
              <h1 className="text-xl font-bold text-slate-800">Xinle Du</h1>
              <p className="text-sm text-slate-500">Agentic Infra &middot; LLM Serving</p>
            </div>
          </div>

          <div className="px-6 py-8 lg:px-10 lg:py-10">
            {/* Biography Section */}
            <section id="home" className="mb-12 scroll-mt-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                Biography
              </h2>
              <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700 space-y-4">
                <p>
                  I am a researcher at the <strong>Qwen Applications Business Group of Alibaba</strong>, working on <strong>Agentic Infra</strong>, <strong>distributed LLM inference</strong>, and <strong>PD (Prefill-Decode) separation</strong>. Previously, I was a Principal Engineer at Huawei 2012 Labs, Central Software Institute, where I worked on NPU/GPU large-scale inference systems.
                </p>
                <p>
                  My current interests include <strong>Agentic AI infrastructure</strong>, <strong>LLM inference systems</strong>, <strong>LLM applications</strong>, <strong>GPU/NPU cluster scheduling</strong>, <strong>datacenter networking for AI</strong>, and building large-scale AI infrastructure. 
                  {/* I am an active contributor to the open-source community, with contributions to <a href="https://github.com/kvcache-ai/Mooncake" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mooncake</a> and <a href="https://github.com/vllm-project/vllm-ascend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vLLM-Ascend</a> (10K+ lines of code). I also co-founded the <a href="https://github.com/aigw-project/aigw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AIGW</a> open-source project with top-tier internet clients and Tsinghua University, which is on the CNCF donation roadmap. */}
                </p>
                <p>
                  I received my <strong>Ph.D.</strong> from the Department of Computer Science and Technology at <strong>Tsinghua University</strong> (Advisor: <a href="http://thucsnet.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Prof. Ke Xu</a>, 2018–2023), where I worked on datacenter network transport protocols, congestion control, and blockchain systems. I received my <strong>B.S. degree</strong> from Xidian University.
                </p>
                <p>
                  I am a recipient of the National Scholarship for Doctoral Students (2023) and the National Scholarship for Undergraduate Students (2014, 2015, 2016).
                </p>
              </div>

              {/* Selected highlights */}
              <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-100">
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">Highlights</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 shrink-0">&#8226;</span>
                    <span>Currently building Agentic Infra, distributed inference, and PD separation at Alibaba Qwen</span>
                  </li>
                  {/* <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 shrink-0">&#8226;</span>
                    <span>Built 2 LLM inference product lines from scratch at Huawei, serving Xiaoyi, Huawei Cloud PaaS, and top-3 internet clients</span>
                  </li> */}
                  {/* <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 shrink-0">&#8226;</span>
                    <span>Defined 4 core architectures (PD separation, heterogeneous transfer, load balancing, hot KV-Cache replication) adopted in Huawei 2025 tech roadmap</span>
                  </li> */}
                  {/* <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 shrink-0">&#8226;</span>
                    <span>Leading AIGW open-source project with CNCF donation planned for 2026.6</span>
                  </li> */}
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 shrink-0">&#8226;</span>
                    <span>Published 20+ papers at top venues (NSDI, SIGCOMM, CoNEXT, IEEE Trans. Netw., etc.)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                Experience
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="text-sm text-slate-400 font-mono shrink-0 w-28">2026 – Now</div>
                  <div>
                    <div className="font-medium text-slate-800">Researcher, Agentic Infra / LLM Serving</div>
                    <div className="text-sm text-slate-600">Alibaba, Qwen Applications Business Group</div>
                    <div className="text-sm text-slate-500 mt-1">Agentic infrastructure, distributed inference, and PD (Prefill-Decode) separation.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-sm text-slate-400 font-mono shrink-0 w-28">2023 – 2026</div>
                  <div>
                    <div className="font-medium text-slate-800">Principal Engineer, LLM Serving / AI Infra</div>
                    <div className="text-sm text-slate-600">Huawei 2012 Labs, Central Software Institute, Beijing</div>
                    <div className="text-sm text-slate-500 mt-1">Leading NPU/GPU large-scale inference systems.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-sm text-slate-400 font-mono shrink-0 w-28">2018 – 2023</div>
                  <div>
                    <div className="font-medium text-slate-800">Ph.D. in Computer Science</div>
                    <div className="text-sm text-slate-600">Tsinghua University, Advisor: Prof. Ke Xu</div>
                    <div className="text-sm text-slate-500 mt-1">Research: datacenter networks, congestion control, blockchain.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-sm text-slate-400 font-mono shrink-0 w-28">2014 – 2018</div>
                  <div>
                    <div className="font-medium text-slate-800">B.S. in Computer Science</div>
                    <div className="text-sm text-slate-600">Xidian University.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="scroll-mt-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                Publications
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                Full list on <a href="https://dblp.org/pid/204/1946.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DBLP</a>.
              </p>

              {publications.map((group, idx) => (
                <PubGroupComponent key={idx} group={group} />
              ))}
            </section>

            {/* Footer */}
            <footer className="mt-16 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
              <p>&copy; {new Date().getFullYear()} Xinle Du. All rights reserved.</p>
              <p className="mt-1">Last updated: August 2026</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
