import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ExperienceAccordion() {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      className="w-full"
    >
      <AccordionItem value="item-1" className="horizontal-animation">
        <AccordionTrigger>
          <div className="w-full flex justify-between">
            <div>Managing Partner @ Conta-Mais</div>
            <div className="px-4">Jul 18 - Dec-21</div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="w-full rounded-md bg-gray-900 border border-gray-800">
          <ol>
            <li>
              I founded Conta-Mais, a company that connects professionals with
              technical expertise and an active presence on social media,
              generating revenue through infoproduct subscriptions.
            </li>
            <li>
              Developed using WordPress and PHP, and later rebuilt the platform
              with ReactJs and NodeJs to enhance scalability and performance,
              addressing challenges that arose with the growing user base.
            </li>
            <li>
              Implemented payment gateways and integrated tools/APIs (PWA, Push
              Notifications, Google Analytics, SMTP).
            </li>
            <li>
              I identified issues and improved the SEO score, ensuring a smooth
              user experience and enhanced online visibility for the platform.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="horizontal-animation">
        <AccordionTrigger>
          <div className="w-full flex justify-between">
            <div>Process analyst @ Itaú Unibanco</div>
            <div className="px-4">Mar 16 - Jul 18</div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="w-full rounded-md bg-gray-900 border border-gray-800">
          <ol>
            <li>
              Expertise in analyzing and optimizing existing processes for
              increased efficiency.
            </li>
            <li>
              Specialized in creating insightful reports to aid strategic
              decision-making.
            </li>
            <li>
              Automating processes and developing tools for streamlined
              workflows.
            </li>
            <li>
              Proficient in using SAS and SQL for seamless ODBC integration,
              ensuring data consistency.
            </li>
            <li>
              Skillful in developing dynamic indicators in Excel with VBA for
              real-time insights.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="horizontal-animation">
        <AccordionTrigger>
          <div className="w-full flex justify-between">
            <div>Intern @ Itaú Unibanco</div>
            <div className="px-4">May 14 - Mar 16</div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="w-full rounded-md bg-gray-900 border border-gray-800">
          <ol>
            <li>
              Monitor occurrences related to technological solutions, detecting
              opportunities/improvements.
            </li>
            <li>
              Assistance in the planning and management of the project for
              deploying tablets with a custom system developed on Windows Mobile
              for commercial sales representatives.
            </li>
            <li>
              Structure and actively participate in the acquisition, logistics,
              activation, support and maintenance process for users.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ExperienceAccordion;
