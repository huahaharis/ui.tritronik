"use client"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/ui/data-table"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    customer_name: "Ken",
    date: "2024-01-01",
  },
  {
    id: "3u1reoj4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    customer_name: "Abe",
    date: "2024-01-02",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    customer_name: "Monserrat",
    date: "2024-01-03",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    customer_name: "Silas",
    date: "2024-01-04",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    customer_name: "Carmella",
    date: "2024-01-05",
  },
    {
    id: "97unjhsa",
    amount: 900,
    status: "success",
    email: "Anton99@gmail.com",
    customer_name: "Anton",
    date: "2024-01-04",
  },
  {
    id: "ksk991mks",
    amount: 340,
    status: "failed",
    email: "carmella@hotmail.com",
    customer_name: "Carmella",
    date: "2024-01-05",
  }
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  customer_name: string
  date: string
}

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: any) => <div className="capitalize">{value}</div>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (value: any) => <div className="lowercase">{value}</div>
  },
  {
    title: 'Customer',
    dataIndex: 'customer_name',
    key: 'customer_name',
    render: (value: any) => <div className="capitalize">{value}</div>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (value: any) => {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value)
      return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: (_: any, payment: Payment) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
];

export function TableDemo() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} paginationStyle="numbered" enableSelection={false} />
    </div>
  )
}
