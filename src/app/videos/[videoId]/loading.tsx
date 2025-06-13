import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Clock, Tag, Layers } from 'lucide-react';

export default function LoadingVideoPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl animate-pulse">
        <header className="mb-6">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={16} className="text-muted-foreground" /> <Skeleton className="h-4 w-24" />
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-muted-foreground" /> <Skeleton className="h-4 w-16" />
            </span>
            <span className="flex items-center gap-1.5">
              <Layers size={16} className="text-muted-foreground" /> <Skeleton className="h-4 w-20" />
            </span>
          </div>
        </header>

        <section className="mb-8">
          <Skeleton className="aspect-video w-full rounded-lg" />
        </section>

        <section>
          <Skeleton className="h-8 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-2" />
        </section>

        <section className="mt-8 pt-6 border-t">
          <Skeleton className="h-6 w-1/4 mb-4" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
