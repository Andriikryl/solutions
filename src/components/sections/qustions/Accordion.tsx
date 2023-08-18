"use client";
import React, { FC, forwardRef, ReactNode, Ref } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import style from "./style.module.css";

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

const AccordionTrigger: FC<AccordionTriggerProps> = forwardRef(
  (
    { children, className, ...props }: AccordionTriggerProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className={style.AccordionHeader}>
      <Accordion.Trigger
        className={classNames(style.AccordionTrigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={style.AccordionChevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent: FC<AccordionContentProps> = forwardRef(
  (
    { children, className, ...props }: AccordionContentProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      className={classNames(style.AccordionContent, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={style.AccordionContentText}>{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

const AccordionDemo: FC = () => (
  <Accordion.Root
    className={style.AccordionRoot}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className={style.AccordionItem} value="item-1">
      <AccordionTrigger>
        How can I authenticate and authorize requests to your API?
      </AccordionTrigger>
      <AccordionContent>
        Their team of experts understood my vision and translated it into a
        beautifully designed website. The attention to detail and the seamless
        functionality of the site surpassed my expectations
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={style.AccordionItem} value="item-2">
      <AccordionTrigger>
        What programming languages are supported by your API/SDK?
      </AccordionTrigger>
      <AccordionContent>
        Their team of experts understood my vision and translated it into a
        beautifully designed website. The attention to detail and the seamless
        functionality of the site surpassed my expectations
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={style.AccordionItem} value="item-3">
      <AccordionTrigger>
        What is the rate limit for API requests?
      </AccordionTrigger>
      <AccordionContent className={style.AccordionContent}>
        Their team of experts understood my vision and translated it into a
        beautifully designed website. The attention to detail and the seamless
        functionality of the site surpassed my expectationsYes! You can animate
        the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={style.AccordionItem} value="item-4">
      <AccordionTrigger>
        How can I authenticate and authorize requests to your API?
      </AccordionTrigger>
      <AccordionContent>
        Their team of experts understood my vision and translated it into a
        beautifully designed website. The attention to detail and the seamless
        functionality of the site surpassed my expectations
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={style.AccordionItem} value="item-5">
      <AccordionTrigger>
        How can I authenticate and authorize requests to your API?
      </AccordionTrigger>
      <AccordionContent>
        Their team of experts understood my vision and translated it into a
        beautifully designed website. The attention to detail and the seamless
        functionality of the site surpassed my expectations
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={style.AccordionItem} value="item-6">
      <AccordionTrigger>
        How can I authenticate and authorize requests to your API?
      </AccordionTrigger>
      <AccordionContent>
        Their team of experts understood my vision and translated it into a
        beautifully designed website. The attention to detail and the seamless
        functionality of the site surpassed my expectations
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
