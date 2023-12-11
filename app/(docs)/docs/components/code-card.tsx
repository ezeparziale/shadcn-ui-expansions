'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/code-highlight';
import { cn } from '@/lib/utils';

interface CodeCardProps {
  children?: React.ReactNode;
  code?: string;
  className?: string;
}
const CodeCard = ({ children, code, className }: CodeCardProps) => {
  return (
    <Tabs defaultValue="preview" className={cn(className)}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="rounded-md border-2 border-gray-200 p-3 dark:border-gray-600"
      >
        {children}
      </TabsContent>
      <TabsContent
        value="code"
        className="bg-codeBg rounded-md border-2 border-gray-200 p-3 dark:border-gray-600"
      >
        <CodeHighlight code={code} inTab />
      </TabsContent>
    </Tabs>
  );
};

export default CodeCard;
