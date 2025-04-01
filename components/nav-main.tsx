"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  isActive?: boolean
  items?: NavItem[]
}

interface NavMainProps {
  items: NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <NavItemWithSubItems key={item.title} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function NavItemWithSubItems({ item }: { item: NavItem }) {
  const hasSubItems = item.items && item.items.length > 0
  const [isOpen, setIsOpen] = React.useState(hasSubItems ? item.items!.some((subItem) => subItem.isActive) : false)

  if (!hasSubItems) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href={item.url} className="font-medium">
            {item.title}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="w-full justify-between font-medium">
            {item.title}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="ml-4 mt-1 space-y-1 border-l border-pink-100 pl-2">
            {item.items!.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.url}
                className={`block rounded-md px-2 py-1.5 text-sm ${
                  subItem.isActive
                    ? "bg-pink-100 font-medium text-pink-700"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

