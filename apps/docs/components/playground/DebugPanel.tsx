"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bug, Code2, Copy, Check } from "lucide-react";
import { createHighlighter } from "shiki";
import {
  idleViewSource,
  ringViewSource,
  callViewSource,
  musicViewSource,
  navigationViewSource,
  paymentViewSource,
  chargingViewSource,
  silentViewSource,
  morphViewSource,
} from "@/components/playground/views/source";
import type { PresetConfig } from "@/components/playground/types";

export interface DebugPanelProps {
  activeState: string;
  animatedConfig?: PresetConfig;
}

const VIEW_SOURCE_CODES: Record<string, string> = {
  idle: idleViewSource,
  ring: ringViewSource,
  call: callViewSource,
  music: musicViewSource,
  navigation: navigationViewSource,
  payment: paymentViewSource,
  charging: chargingViewSource,
  silent: silentViewSource,
  morph: morphViewSource,
};

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export default function DebugPanel({
  activeState,
  animatedConfig,
}: DebugPanelProps) {
  const [copied, setCopied] = React.useState(false);
  const [highlightedCode, setHighlightedCode] = React.useState<string>("");
  const sourceCode = VIEW_SOURCE_CODES[activeState] || "N/A";

  React.useEffect(() => {
    let isMounted = true;

    async function highlight() {
      if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
          themes: ["github-dark"],
          langs: ["tsx"],
        });
      }

      try {
        const highlighter = await highlighterPromise;
        if (!highlighter) return;
        const html = highlighter.codeToHtml(sourceCode, {
          lang: "tsx",
          theme: "github-dark",
        });
        if (isMounted) {
          setHighlightedCode(html);
        }
      } catch (error) {
        console.error("Failed to highlight code:", error);
      }
    }

    highlight();
    return () => {
      isMounted = false;
    };
  }, [sourceCode]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="absolute top-4 right-4 gap-2 z-20 bg-background"
        >
          <Bug className="h-4 w-4" />
          <span>Debug</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bug className="h-4 w-4" />
            Debug Panel - {activeState}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 overflow-y-auto px-6 pb-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Render Source Code
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 h-8"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
              </Button>
            </div>
            <div className="relative rounded-md overflow-hidden">
              {highlightedCode ? (
                <div
                  className="max-h-[80vh] overflow-y-auto text-xs [&>pre]:p-4 [&>pre]:font-mono [&>pre]:whitespace-pre-wrap [&>pre]:break-all"
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
              ) : (
                <pre className="max-h-[80vh] overflow-y-auto p-4 text-xs font-mono whitespace-pre-wrap break-all">
                  <code>{sourceCode}</code>
                </pre>
              )}
            </div>
          </div>
          {animatedConfig && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Bug className="h-4 w-4" />
                Configuration
              </h3>
              <Card className="p-0">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Width</TableCell>
                        <TableCell className="font-mono">
                          {animatedConfig.width}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Height</TableCell>
                        <TableCell className="font-mono">
                          {animatedConfig.height}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Border Radius</TableCell>
                        <TableCell className="font-mono">
                          {animatedConfig.borderRadius}px
                        </TableCell>
                      </TableRow>
                      {animatedConfig.opacity !== undefined && (
                        <TableRow>
                          <TableCell>Opacity</TableCell>
                          <TableCell className="font-mono">
                            {animatedConfig.opacity.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      )}
                      {animatedConfig.scale !== undefined && (
                        <TableRow>
                          <TableCell>Scale</TableCell>
                          <TableCell className="font-mono">
                            {animatedConfig.scale.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      )}
                      {animatedConfig.rotate !== undefined && (
                        <TableRow>
                          <TableCell>Rotate</TableCell>
                          <TableCell className="font-mono">
                            {animatedConfig.rotate}°
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
