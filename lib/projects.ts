export interface Project {
  slug: string;
  title: string;
  problem: string;
  tools: string[];
  automated: string;
  description: string;
  architecture: string;
  challenges: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "linux-server-monitoring",
    title: "Linux Server Monitoring & Automation",
    problem:
      "Production servers lacked centralized health monitoring, leading to undetected disk usage spikes, zombie processes, and missed service failures during off-hours.",
    tools: ["Linux", "Bash", "Cron", "Systemd", "Logrotate", "Slack API"],
    automated:
      "Automated disk usage alerts, service health checks, log rotation, and process cleanup via Bash scripts scheduled with cron jobs.",
    description:
      "A comprehensive server monitoring and automation toolkit built entirely with Bash scripting and Linux-native tools. The system continuously monitors critical server metrics and sends real-time alerts when thresholds are breached.",
    architecture:
      "The system is composed of modular Bash scripts orchestrated via cron. A central dispatcher script triggers individual monitoring modules (disk, CPU, memory, processes, services) at configurable intervals. Alert routing is handled by a notification layer that supports Slack webhooks and email. Logs are structured with timestamps and severity levels, managed by logrotate to prevent disk bloat.",
    challenges: [
      "Handled edge cases where df output varied across different Linux distributions by normalizing parsing logic",
      "Implemented idempotent cleanup scripts that safely handle concurrent execution without race conditions",
      "Designed a notification throttling mechanism to prevent alert fatigue during cascading failures",
      "Created a self-healing module that automatically restarts failed systemd services with exponential backoff",
    ],
    githubUrl: "#",
  },
  {
    slug: "cicd-pipeline-github-actions",
    title: "CI/CD Pipeline with GitHub Actions",
    problem:
      "Manual deployments were error-prone, inconsistent across environments, and created bottlenecks in the development workflow with no automated quality gates.",
    tools: [
      "GitHub Actions",
      "Docker",
      "Docker Compose",
      "Nginx",
      "SSH",
      "Jest",
    ],
    automated:
      "Automated the full build-test-deploy lifecycle: linting, unit tests, Docker image builds, container registry pushes, and zero-downtime deployments via SSH.",
    description:
      "A production-grade CI/CD pipeline using GitHub Actions that automates the entire software delivery process from code commit to production deployment. The pipeline enforces quality gates and ensures consistent, repeatable deployments.",
    architecture:
      "The pipeline is structured as a multi-stage workflow with distinct jobs for linting, testing, building, and deploying. Docker multi-stage builds optimize image size. The deployment stage uses SSH to connect to production servers, pulls the latest image, and performs a rolling update using Docker Compose. Branch-based triggers ensure the correct environment receives each deployment.",
    challenges: [
      "Configured GitHub Actions secrets and SSH key authentication for secure production server access",
      "Implemented Docker layer caching in CI to reduce build times by 60%",
      "Designed a rollback mechanism that reverts to the previous Docker image tag on deployment failure",
      "Set up parallel test execution to keep pipeline duration under 5 minutes",
    ],
    githubUrl: "#",
  },
  {
    slug: "cloud-monitoring-prometheus-grafana",
    title: "Cloud Monitoring with Prometheus & Grafana",
    problem:
      "Cloud infrastructure had no visibility into resource utilization, application performance, or system health, making capacity planning and incident response reactive instead of proactive.",
    tools: [
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Alertmanager",
      "Docker",
      "AWS EC2",
    ],
    automated:
      "Automated metric collection from cloud instances, real-time dashboard generation, and multi-channel alert routing based on severity and service ownership.",
    description:
      "A full observability stack deployed on AWS EC2 that provides real-time monitoring, alerting, and visualization for cloud infrastructure. The system collects, stores, and visualizes metrics from multiple sources with configurable alert thresholds.",
    architecture:
      "Prometheus scrapes metrics from Node Exporter instances running on each EC2 instance at 15-second intervals. Custom application metrics are exposed via /metrics endpoints. Alertmanager handles alert deduplication, grouping, and routing to Slack and email. Grafana connects to Prometheus as a data source, providing pre-built dashboards for system metrics, Docker container stats, and application-level KPIs. Everything runs in Docker containers managed by Docker Compose.",
    challenges: [
      "Tuned Prometheus retention and storage to balance disk usage with historical query performance",
      "Designed Alertmanager routing trees that correctly escalate alerts based on severity and time-of-day",
      "Created Grafana dashboard templates that auto-discover new instances using Prometheus service discovery",
      "Implemented secure remote write for long-term metric storage with proper authentication",
    ],
    githubUrl: "#",
  },
];
