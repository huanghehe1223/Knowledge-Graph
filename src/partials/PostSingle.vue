<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <div class="flex justify-between pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Left content -->
        <div class="max-w-3xl">

          <article>
            <!-- Section header -->
            <header class="pb-8">
              <div class="mb-6">
                <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  to="/blog"><span class="tracking-normal text-blue-300">&lt;-</span> Back To Blog</router-link>
              </div>
              <h1 class="text-5xl font-bold mb-5">How to migrate to serverless hosting</h1>
              <div class="flex items-center gap-3">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="32" height="32" alt="Author 01" />
                <div class="text-sm text-gray-500">Alexandra Moore · <span class="text-gray-700">July 22, 2027</span>
                </div>
              </div>
            </header>

            <div
              class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
              <p>
                In the ever-evolving landscape of technology, one paradigm shift that has garnered significant attention
                and adoption is serverless computing. Serverless architecture, often misunderstood as the absence of
                servers, <strong>actually refers to outsourcing server management and maintenance</strong> to a
                third-party cloud provider.
              </p>
              <p>
                This innovative approach offers numerous benefits, including scalability, reduced operational overhead,
                and cost efficiency. In this blog post, we'll explore the journey of migrating to serverless hosting and
                the advantages it brings.
              </p>
              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="serverless">About Serverless Hosting</h2>
              <p>
                Traditionally, hosting applications required managing servers, provisioning resources, and handling
                scaling demands.
              </p>
              <p>
                Cloud providers such as <a href="#0">AWS Lambda</a>, <a href="#0">Google Cloud</a> Functions, and <a
                  href="#0">Microsoft Azure</a> Functions offer serverless platforms where developers can upload their
                code, define triggers, and let the platform handle the rest.
              </p>
              <blockquote>
                <p>
                  We're excited to partner with Vercel on bringing the latest state of the art open source machine
                  learning models to more AI Engineers. We believe that AI should be easy to run and integrate into any
                  web application.
                </p>
              </blockquote>
              <p>
                Serverless platforms are inherently designed for high availability and fault tolerance. With built-in
                redundancy and automatic failover mechanisms, applications hosted on <a href="#0">serverless
                  platforms</a> are resilient to infrastructure failures, ensuring uninterrupted service delivery.
              </p>
              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="benefits">Benefits of Serverless Hosting</h2>
              <ol>
                <li>
                  <strong>Scalability</strong>: Serverless platforms automatically scale resources based on demand.
                  Whether your application experiences a sudden spike in traffic or encounters periods of low activity,
                  the platform dynamically adjusts resources to match the workload, ensuring optimal performance without
                  manual intervention.
                </li>
                <li>
                  <strong>Cost Efficiency</strong>: With serverless hosting, you pay only for the resources consumed
                  during execution, eliminating the need to provision and maintain idle servers. This pay-per-use model
                  can result in significant cost savings, especially for applications with unpredictable or variable
                  workloads.
                </li>
                <li>
                  <strong>Reduced Operational Complexity</strong>: Managing servers, monitoring system health, and
                  applying security patches are all responsibilities handled by the serverless platform. This reduces
                  the operational burden on development teams, allowing them to focus on delivering features and
                  improving the user experience.
                </li>
              </ol>
              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="guide">Step-by-Step Guide</h2>
              <p>
                Evaluate your existing application architecture and identify components suitable for migration to a
                serverless model. <strong>Functions or modules that can operate independently</strong> and have
                well-defined inputs and outputs are ideal candidates for serverless deployment.
              </p>
              <p>
                Restructure your application to align with the serverless paradigm. Decompose monolithic components into
                smaller, more granular functions that can be independently deployed and scaled.
              </p>
              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
              <h2 data-scrollspy-target id="conclusion">Conclusion</h2>
              <p>
                Migrating to serverless hosting represents a transformative shift in the way applications are developed,
                deployed, and managed. By leveraging the scalability, cost efficiency, and operational simplicity of
                serverless architecture, organizations can unlock new opportunities for innovation and agility. While
                the migration process may require careful planning and execution, the <a href="#0">benefits of
                  serverless</a> hosting far outweigh the initial investment, paving the way for a more scalable,
                resilient, and cost-effective future in cloud computing.
              </p>
            </div>

          </article>

          <!-- Newsletter form -->
          <div class="text-center md:text-left mt-10 pt-10 border-t border-gray-200">
            <h3 class="text-lg font-bold mb-6 md:mb-8">Get all of our updates directly to your inbox.</h3>
            <form>
              <div class="flex flex-col sm:flex-row justify-center md:justify-start max-w-sm mx-auto sm:max-w-none">
                <div class="relative flex mb-2 sm:mb-0 sm:mr-2 sm:min-w-[340px]">
                  <div class="absolute h-full w-10 flex items-center justify-center pointer-events-none">
                    <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="none">
                      <path
                        d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                    </svg>
                  </div>
                  <input type="email" class="form-input w-full pl-10" placeholder="Your email..."
                    aria-label="Your email" />
                </div>
                <button
                  class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow whitespace-nowrap"
                  type="submit">Subscribe</button>
              </div>
            </form>
          </div>

        </div>

        <!-- Right sidebar -->
        <aside class="max-md:hidden w-60 shrink-0 ml-6">
          <div
            class="sticky top-24 p-5 border-l border-r [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.5),transparent)1]">
            <div class="font-bold">On this page</div>
            <ul class="text-sm space-y-2 mt-2">
              <li>
                <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#serverless">About Serverless
                  Hosting</a>
              </li>
              <li>
                <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#benefits">Benefits of Serverless
                  Hosting</a>
              </li>
              <li>
                <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#guide">Step-by-Step Guide</a>
              </li>
              <li>
                <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#conclusion">Conclusion</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

    </div>
  </section>
</template>